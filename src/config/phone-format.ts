import { format } from "@react-input/mask";

export const phoneFormatOptions = {
  mask: "(__) ___-__-__",
  replacement: { _: /\d/ },
};

export const timeFormatOptions = {
  mask: "__:__",
  replacement: { _: /\d/ },
};

export const formatPhoneValue = (phone: string) =>
  format(phone, phoneFormatOptions);
