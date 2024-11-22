import { Outlet } from "react-router-dom";
import { Sidebar } from "../../widgets";
import { AppContent, DashboardLayoutWrapper } from "./dashboard-layout.style";
import { AuthGuard } from "../../app/guards/AuthGuard";

export function DashboardLayout() {
  return (
    <AuthGuard>
      <DashboardLayoutWrapper>
        <Sidebar />
        <AppContent>
          <Outlet />
        </AppContent>
      </DashboardLayoutWrapper>
    </AuthGuard>
  );
}
