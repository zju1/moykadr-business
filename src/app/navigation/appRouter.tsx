import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../../layouts/dashboard-layout/DashboardLayout";
import { SignInPage } from "../../features";
import { SettingsPage } from "../../pages";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <h1></h1>,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <SignInPage />,
  },
]);
