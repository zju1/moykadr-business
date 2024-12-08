import { useTranslation } from "react-i18next";
import { Page } from "../../../widgets";
import { AttendanceList } from "../../../features/attendance/ui/AttendanceList";

export function AttendancePage() {
  const { t } = useTranslation();

  return (
    <Page title={t("attendance")}>
      <AttendanceList />
    </Page>
  );
}
