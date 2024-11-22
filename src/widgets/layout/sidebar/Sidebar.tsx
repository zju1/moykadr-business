import { useTranslation } from "react-i18next";
import {
  AdditionalNavigationItems,
  NavigationItems,
} from "../../../config/sidebar/sidebar.config";
import {
  SidebarUserInfo,
  SidebarLink,
  SidebarLinks,
  SidebarLogo,
  SidebarTop,
  SidebarWrapper,
  SidebarBottom,
} from "./sidebar.style";
import { SidebarUser } from "./sidebar-user/SidebarUser";

export function Sidebar() {
  const { t } = useTranslation();
  return (
    <SidebarWrapper>
      <SidebarTop>
        <SidebarLogo to="/">
          <img src="/logo-full-light.svg" alt="МойКадр - logo" />
        </SidebarLogo>
        <SidebarLinks>
          {NavigationItems.map((item) => (
            <SidebarLink
              key={item.href}
              to={item.href}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon">
                <item.icon fontSize="inherit" />
              </span>
              <span className="label">{t(item.label)}</span>
            </SidebarLink>
          ))}
        </SidebarLinks>
      </SidebarTop>
      <SidebarBottom>
        <SidebarLinks>
          {AdditionalNavigationItems.map((item) => (
            <SidebarLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                isActive ? "active bottomLink " : " bottomLink "
              }
            >
              <span className="icon">
                <item.icon fontSize="inherit" />
              </span>
              <span className="label">{t(item.label)}</span>
            </SidebarLink>
          ))}
        </SidebarLinks>
        <SidebarUserInfo>
          <SidebarUser />
        </SidebarUserInfo>
      </SidebarBottom>
    </SidebarWrapper>
  );
}
