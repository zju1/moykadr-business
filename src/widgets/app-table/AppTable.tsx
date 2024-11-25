import { CustomizedTable } from "./app-table.style";
import { DataGridProProps } from "@mui/x-data-grid-pro";

export function AppTable(props: DataGridProProps) {
  return <CustomizedTable {...props} disableColumnResize />;
}
