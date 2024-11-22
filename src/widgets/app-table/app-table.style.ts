import { styled } from "@mui/material";
import { DataGridPro } from "@mui/x-data-grid-pro";

export const CustomizedTable = styled(DataGridPro)(({ theme }) => ({
  background: theme.palette.background.paper,
  ".MuiDataGrid-columnSeparator": {
    display: "none",
  },
  ".MuiDataGrid-columnHeaders .MuiDataGrid-row--borderBottom": {
    background: theme.palette.grey[100],
  },
}));
