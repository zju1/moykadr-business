import { useTranslation } from "react-i18next";
import { DialogBase } from "../../../../widgets/dialog-base/DialogBase";
import { Button, InputAdornment, Stack } from "@mui/material";
import { FormField } from "../../../../lib/shared/FormField";
import { requiredRule } from "../../../../config/rules";
import { useBranchForm } from "../api/useBranchForm";
import { PhoneField } from "../../../../lib/shared/PhoneField";
import { FormLocation } from "../../../../lib/shared/form-location/FormLocation";
import { useWatch } from "react-hook-form";

export function BranchForm() {
  const { t } = useTranslation();
  const {
    onSubmit,
    open,
    handleClose,
    control,
    currentEntity,
    isBeingMutated,
  } = useBranchForm();
  const { radius } = useWatch({ control });

  return (
    <DialogBase
      open={open}
      onClose={handleClose}
      header={t(currentEntity ? "updateBranch" : "createBranch")}
    >
      <Stack pt="24px" gap="24px">
        <Stack gap="12px">
          <FormLocation
            radius={radius || 1}
            rules={{ ...requiredRule }}
            control={control}
            name="latlong"
            label={t("branchLocation")}
            endAdornment={
              <InputAdornment position="end"> {t("meter")} </InputAdornment>
            }
          />
          <FormField
            rules={{ ...requiredRule }}
            control={control}
            name="radius"
            label={t("radius")}
            type="number"
            endAdornment={
              <InputAdornment position="end"> {t("meter")} </InputAdornment>
            }
          />
          <FormField
            rules={{ ...requiredRule }}
            control={control}
            name="name"
            label={t("name")}
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
