import { RouterProvider } from "react-router-dom";
import { appRouter } from "./navigation/appRouter";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./styles/appTheme";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store.config";
import { PersistGate } from "redux-persist/integration/react";
import { Suspense } from "react";
import { Toaster } from "sonner";
import { LicenseInfo } from "@mui/x-license-pro";
import { ConfirmProvider } from "material-ui-confirm";
import { useTranslation } from "react-i18next";

LicenseInfo.setLicenseKey(
  "8e9501f02eecc690bf1d73da2d6ef68aTz04NTY1NCxFPTE3NDExNjI5MDgwMDAsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI="
);

export default function App() {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={appTheme}>
      <Suspense>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ConfirmProvider
              defaultOptions={{
                cancellationText: t("cancel"),
                dialogProps: {
                  className: "confirmDialog",
                },
              }}
            >
              <RouterProvider router={appRouter} />
            </ConfirmProvider>
            <Toaster richColors position="top-center" />
          </PersistGate>
        </Provider>
      </Suspense>
    </ThemeProvider>
  );
}
