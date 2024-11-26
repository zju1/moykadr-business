import { styled } from "@mui/material";

export const FLPin = styled("img")(() => ({
  position: "absolute",
  zIndex: 700,
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-100%)",
  width: "30px",
}));
