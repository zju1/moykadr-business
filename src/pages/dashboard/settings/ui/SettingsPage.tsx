import { useTranslation } from "react-i18next";
import { Page } from "../../../../widgets";
import { Divider, Stack, Tab, Tabs } from "@mui/material";
import { useSettingsPage } from "../lib/useSettingsPage";
import { settingsTabs } from "../lib/settingsTabs";

export function SettingsPage() {
  const { t } = useTranslation();
  const { activeTab, setActiveTab } = useSettingsPage();
  const activeComponent = settingsTabs.find((item) => item.value === activeTab);

  return (
    <Page title={t("settings")} subTitle={t("settingsSubtitle")}>
      <Stack>
        <Stack>
          <Tabs
            value={activeTab}
            onChange={(_event, value) => setActiveTab(value)}
          >
            {settingsTabs.map((item) => (
              <Tab key={item.value} label={t(item.label)} value={item.label} />
            ))}
          </Tabs>
          <Divider />
        </Stack>
        <Stack pt="12px">{activeComponent?.component()}</Stack>
      </Stack>
    </Page>
  );
}
