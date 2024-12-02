/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomizedTable } from "./app-table.style";
import { DataGridProProps, type GridValidRowModel } from "@mui/x-data-grid-pro";

export function AppTable<R extends GridValidRowModel = any>(
  props: DataGridProProps<R>
) {
  return <CustomizedTable {...(props as any)} disableColumnResize />;
}
