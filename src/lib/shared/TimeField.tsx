import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import {
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Stack,
  type OutlinedInputProps,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useMask } from "@react-input/mask";
import { timeFormatOptions } from "../../config/phone-format";

export type FormFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<OutlinedInputProps, "value" | "defaultValue"> & {
    helperText?: string;
    label?: string;
  };

export function TimeField<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  label,
  ...props
}: FormFieldProps<T>) {
  const inputRef = useMask(timeFormatOptions);
  const {
    field: { value, onChange: onFieldChange, ...fieldProps },
    fieldState,
  } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  const errorMessage = fieldState.error?.message?.split("-");
  const [message, variable, errorValue] = errorMessage || [];
  const { t } = useTranslation();

  const helperText = fieldState.error
    ? t(
        message as string,
        variable && errorValue ? { [variable]: errorValue } : undefined
      )
    : props.helperText;

  return (
    <Stack gap="5px">
      {label && <InputLabel error={!!errorMessage}>{label}</InputLabel>}
      <Stack>
        <OutlinedInput
          {...fieldProps}
          {...props}
          value={value}
          inputRef={inputRef}
          size={props.size || "medium"}
          error={!!fieldState.error}
          defaultValue={defaultValue}
          onChange={(event) => {
            onFieldChange(event);
            onChange?.(event);
          }}
        />
        {helperText && (
          <FormHelperText error={!!errorMessage}>{helperText}</FormHelperText>
        )}
      </Stack>
    </Stack>
  );
}
