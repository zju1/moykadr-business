import { Dialog, styled } from "@mui/material";
import { fontName } from "../../lib/utils/fontName";

export const DialogBaseWrapper = styled(Dialog)(({ theme }) => ({
  ".MuiDialog-scrollPaper": {
    background: "rgba(0,0,0,0.7)",
  },
  ".MuiDialog-paper": {
    minWidth: "500px",
    borderRadius: "16px",
    boxShadow: "none",
    minHeight: "200px",
    ".MuiDialogTitle-root": {
      borderBottom: `1px solid ${theme.palette.grey[200]}`,
      font: fontName.unbounded("500 14px"),
      background: theme.palette.grey[100],
      color: theme.palette.text.primary,
    },
  },
}));
