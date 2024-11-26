import type { BranchDTO } from "../model/BranchDTO";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useBranchList } from "./useBranchList";
import { useCallback, useEffect } from "react";
import {
  useCreateBranchMutation,
  useDeleteBranchMutation,
  useUpdateBranchMutation,
} from "../../../../app/store/services/config.service";
import { generateParams } from "../../../../lib/utils/generateParams";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { phoneUtils } from "../../../../lib/utils/phoneUtils";
import { useConfirm } from "material-ui-confirm";
import { formatPhoneValue } from "../../../../config/phone-format";

const defaultValues: BranchDTO = {
  name: "",
  phone: "",
  address: "",
  inn: "",
  comment: "",
  lat: 0,
  long: 0,
  latlong: "",
  radius: 0,
};
const entity = generateParams("branch");

export function useBranchForm() {
  const { t } = useTranslation();

  const { data: dataList } = useBranchList();

  const [createEntity, { isLoading: createLoading }] =
    useCreateBranchMutation();

  const [updateEntity, { isLoading: updateLoading }] =
    useUpdateBranchMutation();

  const [deleteEntity, { isLoading: deleteLoading }] =
    useDeleteBranchMutation();

  const confirm = useConfirm();

  const isBeingMutated = createLoading || updateLoading;

  const [params, setParams] = useSearchParams();
  const { control, handleSubmit, reset, clearErrors } = useForm<BranchDTO>({
    defaultValues,
  });

  const open = params.get(entity.form);

  const currentEntity = params.get(entity.current);

  const currentEntityData = dataList?.data.find(
    (item) => item.id === Number(currentEntity)
  );

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

  const onSubmit = handleSubmit(async (data: BranchDTO) => {
    const method = currentEntity ? updateEntity : createEntity;
    const successMessage = currentEntity ? "changesSaved" : "branchCreated";

    try {
      const [lat, lng] = data.latlong.split(",");
      await method({
        ...data,
        phone: phoneUtils.clearPhoneNumber(data.phone),
        radius: Number(data.radius),
        lat: Number(lat),
        long: Number(lng),
      }).unwrap();
      toast.success(t(successMessage));
      handleClose();
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  });

  const handleDelete = useCallback(
    async (id: number | string) => {
      confirm({
        title: t("areYouSure"),
        description: t("branchDeleteWarning"),
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
    if (currentEntity && open && currentEntityData) {
      reset({
        ...currentEntityData,
        phone: formatPhoneValue(currentEntityData.phone!),
        latlong: `${currentEntityData.lat},${currentEntityData.long}`,
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
