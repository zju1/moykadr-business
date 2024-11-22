import { RegisterOptions } from "react-hook-form";

declare type BaseApi<T = unknown> = {
  code: number;
  message: string;
  data: T;
};

export type RequestParamsType = Record<string, unknown>;

export type Rule = Omit<
  RegisterOptions<TFieldValues, TName>,
  "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
>;

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}
declare module "@mui/material/FormControl" {
  interface FormControlPropsSizeOverrides {
    mini: true;
  }
}
declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    mini: true;
  }
}
