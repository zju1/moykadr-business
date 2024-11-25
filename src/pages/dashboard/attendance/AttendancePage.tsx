import { useTranslation } from "react-i18next";
import { Page } from "../../../widgets";

export function AttendancePage() {
  const { t } = useTranslation();

  return <Page title={t("attendance")}></Page>;
}
