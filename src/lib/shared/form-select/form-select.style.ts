import { ButtonBase, Popover, styled } from "@mui/material";
import { fontName } from "../../utils/fontName";

export const FormSelectWrapper = styled(ButtonBase)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.shape.borderRadius,
  textAlign: "left",
  justifyContent: "flex-start",
  padding: "0 14px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  "&.medium": {
    height: "45px",
    font: fontName.onest("400 14px"),
  },
  "&.small": {
    height: "35px",
    font: fontName.onest("400 15px"),
  },
  "&.focused, :focus": {
    border: `2px solid ${theme.palette.primary.main} !important`,
  },
  "&.error": {
    border: `1px solid ${theme.palette.error.main} !important`,
  },
  ":focus.error": {
    border: `2px solid ${theme.palette.error.main} !important`,
  },
}));

export const SelectMenu = styled(Popover)(({ theme }) => ({
  fieldset: {
    border: "none !important",
    borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  ".MuiPopover-paper": {
    boxShadow: "0 5px 20px rgba(0,0,0,0.7)",
    ".focusedItem": {
      background: theme.palette.grey[200],
    },
    ".MuiMenuItem-root": {
      height: "45px",
      font: fontName.onest("300 14px"),
      borderRadius: "8px",
    },
  },
}));
