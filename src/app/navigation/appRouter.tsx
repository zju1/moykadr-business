import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../../layouts/dashboard-layout/DashboardLayout";
import { SignInPage } from "../../features";
import {
  EmployeesPage,
  SettingsPage,
  DashboardPage,
  AttendancePage,
  SalariesPage,
} from "../../pages";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "attendance",
        element: <AttendancePage />,
      },
      {
        path: "employees",
        element: <EmployeesPage />,
      },
      {
        path: "salaries",
        element: <SalariesPage />,
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
