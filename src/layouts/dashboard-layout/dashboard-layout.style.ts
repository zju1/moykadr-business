import { alpha, styled } from "@mui/material";

export const DashboardLayoutWrapper = styled("div")(({ theme }) => ({
  background: alpha(theme.palette.primary.main, 0.03),
}));

export const AppContent = styled("main")(({ theme }) => ({
  paddingLeft: 270,
  background: theme.palette.background.default,
}));
