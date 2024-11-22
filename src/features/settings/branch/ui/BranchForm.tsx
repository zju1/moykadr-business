import { useTranslation } from "react-i18next";
import { DialogBase } from "../../../../widgets/dialog-base/DialogBase";
import { Button, Stack } from "@mui/material";
import { FormField } from "../../../../lib/shared/FormField";
import { requiredRule } from "../../../../config/rules";
import { useBranchForm } from "../api/useBranchForm";

export function BranchForm() {
  const { t } = useTranslation();
  const { onSubmit, open, handleClose, control } = useBranchForm();

  return (
    <DialogBase open={open} onClose={handleClose} header={t("createBranch")}>
      <Stack pt="24px" gap="24px">
        <Stack gap="12px">
          <FormField
            rules={{ ...requiredRule }}
            control={control}
            name="name"
            label={t("name")}
          />
          <FormField
            rules={{ ...requiredRule }}
            control={control}
            name="phone"
            label={t("phone")}
          />
          <FormField
            rules={{ ...requiredRule }}
            control={control}
            name="address"
            label={t("address")}
          />
          <FormField
            rules={{ ...requiredRule }}
            control={control}
            name="inn"
            label={t("inn")}
          />
          <FormField
            rules={{ ...requiredRule }}
            control={control}
            name="comment"
            label={t("comment")}
          />
        </Stack>
        <Button onClick={onSubmit} variant="contained" size="large">
          {t("create")}
        </Button>
      </Stack>
    </DialogBase>
  );
}
