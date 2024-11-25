import { useTranslation } from "react-i18next";
import { CrudHeader, Page } from "../../../widgets";
import { Stack } from "@mui/material";
import { useUserForm } from "../../../features/employees/api/useUserForm";
import { UsersList } from "../../../features/employees";
import { UserForm } from "../../../features/employees/ui/UserForm";

export function EmployeesPage() {
  const { t } = useTranslation();
  const { handleOpen } = useUserForm();
  return (
    <Page title={t("employees")}>
      <Stack gap="12px">
        <CrudHeader onCreate={handleOpen} />
        <UsersList />
        <UserForm />
      </Stack>
    </Page>
  );
}
