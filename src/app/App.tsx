import { RouterProvider } from "react-router-dom";
import { appRouter } from "./navigation/appRouter";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./styles/appTheme";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store.config";
import { PersistGate } from "redux-persist/integration/react";
import { Suspense } from "react";
import { Toaster } from "sonner";

export default function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Suspense>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <RouterProvider router={appRouter} />
            <Toaster richColors position="top-center" />
          </PersistGate>
        </Provider>
      </Suspense>
    </ThemeProvider>
  );
}
