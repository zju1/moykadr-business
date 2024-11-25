import { alpha, darken, styled } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { fontName } from "../../../lib/utils/fontName";

export const SidebarWrapper = styled("aside")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  width: "270px",
  background: darken(theme.palette.primary.main, 0.85),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const SidebarTop = styled("section")(() => ({
  display: "grid",
  gap: "12px",
}));

export const SidebarLogo = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  textDecoration: "none",
  color: theme.palette.text.primary,
  padding: "24px",
  height: "70px",
  img: {
    height: "30px",
  },
  borderBottom: `1px solid ${alpha(theme.palette.grey[200], 0.08)}`,
}));

export const SidebarLinks = styled("ul")(() => ({
  display: "grid",
  padding: "0 12px",
}));

export const SidebarLink = styled(NavLink)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "8px 12px",
  textDecoration: "none",
  borderRadius: "8px",
  color: theme.palette.grey[300],
  ".icon": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    width: "30px",
    height: "30px",
    borderRadius: "12px",
    transition: ".2s",
    svg: {
      transition: ".6s",
    },
  },
  ".label": {
    font: fontName.unbounded("500 12px"),
  },
  ":hover": {
    ".icon": {
      background: theme.palette.primary.contrastText,
      color: theme.palette.primary.main,
      svg: {
        transform: "rotateY(360deg)",
      },
    },
  },

  "&.bottomLink": {
    padding: "12px",
    ".icon": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
      background: "transparent",
      color: theme.palette.primary.contrastText,
      width: "fit-content",
      height: "fit-content",
      borderRadius: "12px",
      transition: ".2s",
      svg: {
        transition: ".6s",
      },
    },

    ":hover": {
      background: "rgba(255,255,255,.07)",
      ".icon": {
        svg: {
          transform: "none",
        },
      },
    },
  },
}));

export const SidebarBottom = styled("div")(() => ({
  display: "grid",
  gap: "12px",
}));

export const SidebarUserInfo = styled("div")(({ theme }) => ({
  padding: "12px",
  display: "grid",
  borderTop: `1px solid ${alpha(theme.palette.grey[200], 0.08)}`,
}));
