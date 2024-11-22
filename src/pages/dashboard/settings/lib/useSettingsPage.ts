import { useSearchParams } from "react-router-dom";

export function useSettingsPage() {
  const [params, setParams] = useSearchParams(
    new URLSearchParams({ activeTab: "branches" })
  );
  const activeTab = params.get("activeTab");
  const setActiveTab = (value: string) => {
    params.set("activeTab", value);
    setParams(params);
  };

  return {
    activeTab,
    setActiveTab,
  };
}
