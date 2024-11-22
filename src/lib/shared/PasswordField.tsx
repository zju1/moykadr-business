import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  type OutlinedInputProps,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export type FormFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<OutlinedInputProps, "value" | "defaultValue"> & {
    helperText?: string;
    label?: string;
  };

export function PasswordField<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  label,
  ...props
}: FormFieldProps<T>) {
  const [isPassword, setIsPassword] = useState(true);
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
          size={props.size || "medium"}
          type={isPassword ? "password" : "text"}
          error={!!fieldState.error}
          defaultValue={defaultValue}
          onChange={(event) => {
            onFieldChange(event);
            onChange?.(event);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                size="small"
                onClick={() => setIsPassword(!isPassword)}
              >
                {isPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        {helperText && (
          <FormHelperText error={!!errorMessage}>{helperText}</FormHelperText>
        )}
      </Stack>
    </Stack>
  );
}
