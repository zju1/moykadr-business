import { useTranslation } from "react-i18next";
import { AppTable } from "../../../../widgets";
import { useBranchList } from "../api/useBranchList";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { useBranchForm } from "../api/useBranchForm";
import { phoneUtils } from "../../../../lib/utils/phoneUtils";

export function BranchList() {
  const { data, loading } = useBranchList();
  const { handleOpen, handleDelete, deleteLoading } = useBranchForm();
  const { t } = useTranslation();
  return (
    <AppTable
      loading={loading || deleteLoading}
      columns={[
        {
          field: "id",
          headerName: "№",
          disableColumnMenu: true,
          sortable: false,
          width: 70,
          align: "center",
          headerAlign: "center",
          type: "number",
          renderCell: (index) =>
            index.api.getSortedRowIds().indexOf(index.row.id) + 1,
        },
        {
          field: "name",
          headerName: t("name"),
          minWidth: 150,
          flex: 1,
          disableColumnMenu: true,
          sortable: false,
        },
        {
          field: "phone",
          headerName: t("phone"),
          minWidth: 170,
          disableColumnMenu: true,
          sortable: false,
          valueFormatter: phoneUtils.formatPhoneNumber,
        },
        {
          field: "address",
          headerName: t("address"),
          minWidth: 200,
          disableColumnMenu: true,
          sortable: false,
        },
        {
          field: "inn",
          headerName: t("inn"),
          minWidth: 150,
          disableColumnMenu: true,
          sortable: false,
        },
        {
          field: "comment",
          headerName: t("comment"),
          minWidth: 150,
          disableColumnMenu: true,
          sortable: false,
        },
        {
          headerName: t("actions"),
          field: "actions",
          width: 80,
          maxWidth: 80,
          minWidth: 80,
          type: "actions",
          getActions: ({ id }) => [
            <GridActionsCellItem
              onClick={() => handleOpen(id)}
              icon={<EditRounded />}
              label={t("edit")}
            />,
            <GridActionsCellItem
              icon={<DeleteRounded />}
              label={t("delete")}
              onClick={() => handleDelete(id)}
            />,
          ],
        },
      ]}
      rows={data?.data || []}
    />
  );
}
