import { useTranslation } from "react-i18next";
import { Page } from "../../../../widgets";
import { Divider, Stack, Tab, Tabs } from "@mui/material";
import { useSettingsPage } from "../lib/useSettingsPage";

export function SettingsPage() {
  const { t } = useTranslation();
  const { activeTab, setActiveTab } = useSettingsPage();

  return (
    <Page title={t("settings")} subTitle={t("settingsSubtitle")}>
      <Stack>
        <Stack>
          <Tabs
            value={activeTab}
            onChange={(_event, value) => setActiveTab(value)}
          >
            <Tab value="branches" label={t("branches")} />
          </Tabs>
          <Divider />
        </Stack>
      </Stack>
    </Page>
  );
}
