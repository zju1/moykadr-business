import { styled } from "@mui/material";
import { fontName } from "../../../../lib/utils/fontName";

export const SPWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  minHeight: "100vh",
  gridTemplateRows: "35vh 1fr",
  background: theme.palette.grey[50],
}));

export const SPHeader = styled("header")(({ theme }) => ({
  display: "grid",
  backgroundColor: theme.palette.primary.main,
  backgroundSize: "500px auto",
  backgroundRepeat: "repeat",
  ".content": {
    padding: "12px",
    img: {
      height: "30px",
    },
  },
}));

export const SPContent = styled("div")(() => ({}));

export const SPSheet = styled("div")(({ theme }) => ({
  maxWidth: "470px",
  margin: "0 auto",
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  marginTop: "-10vh",
  padding: "36px",
  display: "grid",
  gap: "36px",
  border: `1px solid ${theme.palette.grey[200]}`,
  [theme.breakpoints.down("sm")]: {
    maxWidth: "320px",
    padding: "24px",
  },
}));

export const SPFormHeader = styled("div")(({ theme }) => ({
  display: "grid",
  h1: {
    font: fontName.geologica("600 24px"),
    color: theme.palette.text.primary,
  },
  p: {
    font: fontName.geologica("300 14px"),
    color: theme.palette.text.secondary,
  },
}));

export const SPFormItems = styled("form")(() => ({
  display: "grid",
  gap: "8px",
}));
