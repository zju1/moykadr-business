import {
  BadgeRounded,
  CalendarMonthRounded,
  DashboardRounded,
  FeedRounded,
  HelpRounded,
  MonetizationOnRounded,
  NotificationsRounded,
  SettingsRounded,
  type SvgIconComponent,
} from "@mui/icons-material";

export interface NavItem {
  href: string;
  label: string;
  icon: SvgIconComponent;
}

export const NavigationItems: NavItem[] = [
  {
    href: "/",
    label: "dashboard",
    icon: DashboardRounded,
  },
  {
    href: "/attendance",
    label: "attendance",
    icon: CalendarMonthRounded,
  },
  {
    href: "/employees",
    label: "employees",
    icon: BadgeRounded,
  },
  {
    href: "/salaries",
    label: "salaries",
    icon: MonetizationOnRounded,
  },
  {
    href: "/settings",
    label: "settings",
    icon: SettingsRounded,
  },
];

export const AdditionalNavigationItems: NavItem[] = [
  {
    href: "/support",
    label: "support",
    icon: HelpRounded,
  },
  {
    href: "/news",
    label: "news",
    icon: FeedRounded,
  },
  {
    href: "/notifications",
    label: "notifications",
    icon: NotificationsRounded,
  },
];
