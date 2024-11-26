import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import {
  FormHelperText,
  InputLabel,
  Stack,
  type OutlinedInputProps,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { MapContainer, TileLayer, useMapEvents, Circle } from "react-leaflet";
import { FLPin } from "./form-location.style";

export type FormLocationProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<OutlinedInputProps, "value" | "defaultValue"> & {
    helperText?: string;
    label?: string;
    radius: number;
  };

function MapEvents({ onChange }: { onChange: (value: string) => void }) {
  const map = useMapEvents({
    dragend: () => {
      const center = map.getCenter();
      onChange(`${center.lat},${center.lng}`);
    },
  });
  return null;
}

export function FormLocation<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  label,
  radius,
  ...props
}: FormLocationProps<T>) {
  const {
    field: { value, onChange: onFieldChange },
    fieldState,
  } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  const splitted = value?.split?.(",");
  const [lat, long] = splitted?.length === 2 ? splitted : [41.2995, 69.2401];
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
        <Stack
          sx={{
            height: "300px",
            borderRadius: "var(--mui-shape-borderRadius)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <MapContainer center={[lat, long]} zoom={18}>
            <Circle center={[lat, long]} radius={radius} />
            <MapEvents
              onChange={(latlng) => {
                onFieldChange({ target: { value: latlng, name } });
              }}
            />
            <FLPin src="/pin.svg" />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </Stack>
        {helperText && (
          <FormHelperText error={!!errorMessage}>{helperText}</FormHelperText>
        )}
      </Stack>
    </Stack>
  );
}
