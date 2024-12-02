/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";

import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { useConfirm } from "material-ui-confirm";
import type { UserDTO } from "../model/UserDTO";
import { generateParams } from "../../../lib/utils/generateParams";
import {
  useCreateEmployeeMutation,
  useDeleteEmployeeMutation,
  useGetEmployeeByIdQuery,
  useUpdateEmployeeMutation,
} from "../../../app/store/services/employees.service";
import { phoneUtils } from "../../../lib/utils/phoneUtils";
import { formatPhoneValue } from "../../../config/phone-format";

const defaultValues: UserDTO = {
  allowed_branches: [],
  full_name: "",
  login: "",
  password: "",
  phone: "",
  weekends: [],
};
const entity = generateParams("user");

export function useUserForm() {
  const { t } = useTranslation();

  const [createEntity, { isLoading: createLoading }] =
    useCreateEmployeeMutation();

  const [updateEntity, { isLoading: updateLoading }] =
    useUpdateEmployeeMutation();

  const [deleteEntity, { isLoading: deleteLoading }] =
    useDeleteEmployeeMutation();

  const confirm = useConfirm();

  const isBeingMutated = createLoading || updateLoading;

  const [params, setParams] = useSearchParams();
  const { control, handleSubmit, reset, clearErrors } = useForm<UserDTO>({
    defaultValues,
  });

  const open = params.get(entity.form);

  const currentEntity = params.get(entity.current);

  const { data: currentEntityData } = useGetEmployeeByIdQuery({
    id: currentEntity,
  });

  const handleClose = useCallback(() => {
    params.delete(entity.form);
    params.delete(entity.current);
    setParams(params);
    reset(defaultValues);
    clearErrors();
  }, [clearErrors, params, reset, setParams]);

  const handleOpen = useCallback(
    (id?: number | string) => {
      if (id) {
        params.set(entity.current, String(id));
      }
      params.set(entity.form, "open");
      setParams(params);
    },
    [params, setParams]
  );

  const onSubmit = handleSubmit(async (data: UserDTO) => {
    const method = currentEntity ? updateEntity : createEntity;
    const successMessage = currentEntity ? "changesSaved" : "employeeCreated";

    try {
      await method({
        ...data,
        phone: phoneUtils.clearPhoneNumber(data.phone),
        allowed_branches: [{ id: (data as any).allowed_branches }],
      }).unwrap();
      toast.success(t(successMessage));
      handleClose();
    } catch (error) {
      console.log(error);
    }
  });

  const handleDelete = useCallback(
    async (id: number | string) => {
      confirm({
        title: t("areYouSure"),
        description: t("employeeDeleteWarning"),
      }).then(async () => {
        try {
          await deleteEntity({ id }).unwrap();
          toast.success(t("entityDeleted"));
        } catch (error) {
          console.log(error);
        }
      });
    },
    [confirm, deleteEntity, t]
  );

  useEffect(() => {
    if (
      currentEntity &&
      open &&
      currentEntityData?.data &&
      currentEntityData?.data.length > 0
    ) {
      const currentEntityValue = currentEntityData.data[0];
      reset({
        ...currentEntityValue,
        phone: formatPhoneValue(currentEntityValue.phone),
        allowed_branches: (currentEntityValue.allowed_branches?.length > 0
          ? currentEntityValue.allowed_branches[0].id
          : null) as any,
      });
    }
  }, [currentEntity, reset, open, currentEntityData]);

  return {
    onSubmit,
    control,
    open: !!open,
    handleClose,
    handleOpen,
    currentEntity,
    isBeingMutated,
    handleDelete,
    deleteLoading,
  };
}
