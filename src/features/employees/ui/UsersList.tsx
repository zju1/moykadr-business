import { useTranslation } from "react-i18next";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { useUsersList } from "../api/useUsersList";
import { useUserForm } from "../api/useUserForm";
import { AppTable } from "../../../widgets";
import { phoneUtils } from "../../../lib/utils/phoneUtils";

export function UsersList() {
  const { data, loading } = useUsersList();
  const { handleOpen, handleDelete, deleteLoading } = useUserForm();
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
          field: "full_name",
          headerName: t("fullName"),
          minWidth: 150,
          flex: 1,
          disableColumnMenu: true,
          sortable: false,
        },
        {
          field: "phone",
          headerName: t("phone"),
          minWidth: 180,
          disableColumnMenu: true,
          sortable: false,
          valueFormatter: (value) => phoneUtils.formatPhoneNumber(value!),
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
