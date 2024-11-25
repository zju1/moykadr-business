import { useTranslation } from "react-i18next";
import { Page } from "../../../widgets";

export function DashboardPage() {
  const { t } = useTranslation();

  return <Page title={t("dashboard")}></Page>;
}
