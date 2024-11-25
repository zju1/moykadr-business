import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import {
  Button,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Stack,
  type SelectProps,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { FormSelectWrapper, SelectMenu } from "./form-select.style";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, Close, Search } from "@mui/icons-material";

export type SelectOption<T = unknown> = {
  label: string;
  value: string | number;
  data?: T;
};

export type FormMultiSelectProps<
  T extends FieldValues,
  K = unknown
> = UseControllerProps<T> &
  Omit<SelectProps, "value" | "defaultValue"> & {
    helperText?: string;
    label?: string;
    options?: SelectOption<K>[];
  };

export function FormMultiSelect<T extends FieldValues, K = unknown>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  label,
  options,
  size = "medium",
  ...props
}: FormMultiSelectProps<T, K>) {
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
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
  const btnRef = useRef<HTMLButtonElement>(null);
  const [defaultFocused, setDefaultFocused] = useState(0);

  const selectedOptions = useMemo(
    () => options?.filter((item) => value.includes(item.value)),
    [options, value]
  )?.map((item) => item.label);

  const filteredOptions = useMemo(
    () =>
      options?.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase())
      ),
    [options, search]
  );

  const helperText = fieldState.error
    ? t(
        message as string,
        variable && errorValue ? { [variable]: errorValue } : undefined
      )
    : props.helperText;

  const eventListener = useCallback(
    (event: KeyboardEvent) => {
      const { key, keyCode } = event;
      if (
        (["ArrowDown", "ArrowUp", "Enter", "Space"].includes(key) ||
          keyCode === 32) &&
        options
      ) {
        event.preventDefault();
        const lastItem = options?.length - 1;
        switch (key) {
          case "ArrowDown": {
            if (defaultFocused === lastItem) {
              setDefaultFocused(0);
            } else {
              setDefaultFocused(defaultFocused + 1);
            }
            break;
          }
          case "ArrowUp": {
            if (defaultFocused === 0) {
              setDefaultFocused(lastItem);
            } else {
              setDefaultFocused(defaultFocused - 1);
            }
            break;
          }
          default: {
            const selectedItem = options[defaultFocused].value;
            const includes = value.includes(selectedItem);
            onFieldChange({
              target: {
                name,
                value: includes
                  ? value.filter(
                      (item: string | number) => item !== selectedItem
                    )
                  : [...value, selectedItem],
              },
            });
          }
        }
      }
    },
    [defaultFocused, name, onFieldChange, options, value]
  );

  useEffect(() => {
    if (anchor) {
      window.addEventListener("keydown", eventListener);
    } else {
      window.removeEventListener("keydown", eventListener);
    }

    return () => {
      window.removeEventListener("keydown", eventListener);
    };
  }, [anchor, eventListener]);

  return (
    <Stack gap="5px">
      {label && <InputLabel error={!!errorMessage}>{label}</InputLabel>}
      <Stack>
        <FormSelectWrapper
          onClick={(event) => setAnchor(event.currentTarget)}
          className={`${size} ${anchor ? "focused" : ""} ${
            errorMessage ? "error" : ""
          }`}
          {...fieldProps}
          ref={btnRef}
        >
          {selectedOptions?.join(" , ")}
        </FormSelectWrapper>
        <SelectMenu
          onClose={() => {
            setAnchor(null);
            setSearch("");
          }}
          open={!!anchor}
          anchorEl={anchor}
          onAnimationEnd={() => {
            if (anchor) {
              inputRef?.current?.focus?.();
            }
          }}
          anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
          transformOrigin={{ horizontal: "center", vertical: "top" }}
          PaperProps={{
            sx: {
              width: btnRef.current?.clientWidth,
            },
          }}
        >
          <Stack gap="12px">
            <Stack>
              <OutlinedInput
                inputRef={inputRef}
                inputProps={{ autoFocus: true }}
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={t("search")}
                startAdornment={
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                }
                endAdornment={
                  search.length > 0 && (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={() => {
                          setSearch("");
                          inputRef.current?.focus?.();
                        }}
                      >
                        <Close fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  )
                }
              />
            </Stack>
            <Stack p="6px" sx={{ maxHeight: "400px", overflowY: "auto" }}>
              {filteredOptions?.map((item, index) => (
                <MenuItem
                  onClick={() => {
                    inputRef.current?.focus?.();
                    setDefaultFocused(index);
                    const includes = value.includes(item.value);
                    onFieldChange({
                      target: {
                        name,
                        value: !includes
                          ? [...value, item.value]
                          : value.filter(
                              (elem: string | number) => elem !== item.value
                            ),
                      },
                    });
                  }}
                  tabIndex={-1}
                  key={item.value}
                  className={defaultFocused === index ? "focusedItem" : ""}
                >
                  <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    flex={1}
                  >
                    <span>{item.label}</span>
                    {value.includes(item.value) && <Check />}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
            <Stack
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                padding: "6px",
                boxShadow: "0 -5px 5px rgba(0,0,0,0.1)",
                background: "white",
              }}
            >
              <Button
                size="small"
                variant="outlined"
                onClick={() =>
                  onFieldChange({
                    target: {
                      name,
                      value: [],
                    },
                  })
                }
              >
                {t("clear")}
              </Button>
              <Button
                size="small"
                variant="contained"
                onClick={() => {
                  setSearch("");
                  setAnchor(null);
                }}
              >
                {t("choose")}
              </Button>
            </Stack>
          </Stack>
        </SelectMenu>
        {helperText && (
          <FormHelperText error={!!errorMessage}>{helperText}</FormHelperText>
        )}
      </Stack>
    </Stack>
  );
}
