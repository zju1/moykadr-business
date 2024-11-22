import { styled } from "@mui/material";
import { fontName } from "../../lib/utils/fontName";

export const PageWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  background: theme.palette.grey[50],
  minHeight: "100vh",
  gridTemplateRows: "auto 1fr",
}));

export const PageHeader = styled("div")(({ theme }) => ({
  padding: "0 24px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  background: theme.palette.background.paper,
  height: "70px",
  gap: "3px",
  h1: {
    font: fontName.unbounded("600 16px"),
    color: theme.palette.text.primary,
  },
  p: {
    font: fontName.unbounded("400 12px"),
    color: theme.palette.text.secondary,
  },
}));
