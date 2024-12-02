import { useTranslation } from "react-i18next";
import { Button, Stack } from "@mui/material";
import { useUserForm } from "../api/useUserForm";
import { DialogBase } from "../../../widgets/dialog-base/DialogBase";
import { FormField } from "../../../lib/shared/FormField";
import { requiredRule } from "../../../config/rules";
import { PhoneField } from "../../../lib/shared/PhoneField";
import { PasswordField } from "../../../lib/shared/PasswordField";
import type { UserDTO } from "../model/UserDTO";
import { useBranchList } from "../../settings";
import { FormMultiSelect } from "../../../lib/shared/form-select/FormMultiSelect";
import { weekends } from "../../../config/weekends";
import { FormSelect } from "../../../lib/shared/form-select/FormSelect";

export function UserForm() {
  const { t } = useTranslation();
  const {
    onSubmit,
    open,
    handleClose,
    control,
    currentEntity,
    isBeingMutated,
  } = useUserForm();
  const { data: branches } = useBranchList();

  return (
    <DialogBase
      open={open}
      onClose={handleClose}
      header={t(currentEntity ? "updateEmployee" : "createEmployee")}
    >
      <Stack pt="24px" gap="24px">
        <Stack gap="12px">
          <FormField
            rules={{ ...requiredRule }}
            control={control}
            name="full_name"
            label={t("fullName")}
          />
          <PhoneField
            rules={{ ...requiredRule }}
            control={control}
            name="phone"
            label={t("phone")}
          />
          <FormField
            rules={{ ...requiredRule }}
            control={control}
            name="login"
            label={t("username")}
          />
          <PasswordField
            rules={{ ...requiredRule }}
            control={control}
            name="password"
            label={t("password")}
          />
          <FormSelect<UserDTO, { username: string }>
            rules={{ ...requiredRule }}
            control={control}
            name="allowed_branches"
            label={t("allowedBranches")}
            options={branches?.data.map((item) => ({
              label: item.name,
              value: item.id,
            }))}
          />
          <FormMultiSelect<UserDTO, { username: string }>
            rules={{ ...requiredRule }}
            control={control}
            name="weekends"
            label={t("weekends")}
            options={weekends.map((item) => ({
              ...item,
              label: t(item.label),
            }))}
          />
        </Stack>
        <Button
          disabled={isBeingMutated}
          onClick={onSubmit}
          variant="contained"
          size="large"
        >
          {t(isBeingMutated ? "wait" : currentEntity ? "save" : "create")}
        </Button>
      </Stack>
    </DialogBase>
  );
}
