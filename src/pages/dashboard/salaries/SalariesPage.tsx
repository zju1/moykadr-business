import { useTranslation } from "react-i18next";
import { Page } from "../../../widgets";

export function SalariesPage() {
  const { t } = useTranslation();

  return <Page title={t("salaries")}></Page>;
}
