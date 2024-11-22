import { styled } from "@mui/material";

export const CrudHeaderWrapper = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: "12px",
  "& > *": {
    borderRadius: "16px",
  },
}));
