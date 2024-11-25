import { ButtonBase, Menu, styled } from "@mui/material";
import { fontName } from "../../../../lib/utils/fontName";

export const SidebarUserWrapper = styled(ButtonBase)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "8px",
  padding: "12px",
  borderRadius: "12px",
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    objectFit: "cover",
  },
  ".user-info": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "6px",
    h1: {
      font: fontName.unbounded("600 12px"),
      color: theme.palette.primary.contrastText,
    },
    p: {
      font: fontName.unbounded("400 10px"),
      color: theme.palette.primary.contrastText,
    },
  },
  ":hover": {
    background: "rgba(255,255,255,0.1)",
  },
}));

export const SidebarMenu = styled(Menu)(() => ({
  ".MuiMenu-paper": {
    width: 240,
    boxShadow: "none",
    padding: "0 6px",

    ".MuiMenuItem-root": {
      borderRadius: "8px",
      padding: "10px 12px",
      height: "40px",
      ":hover": {
        background: "rgba(0,0,0,0.05)",
      },
      ".MuiListItemIcon-root": {},
      ".MuiListItemText-primary": {
        font: fontName.unbounded("500 12px"),
      },
    },
  },
}));
