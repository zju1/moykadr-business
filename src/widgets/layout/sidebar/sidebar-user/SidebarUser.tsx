import { useCallback, useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import { SidebarMenu, SidebarUserWrapper } from "./sidebar-user.style";
import { Divider, ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  AccountCircleRounded,
  CheckRounded,
  LogoutRounded,
} from "@mui/icons-material";
import { useAppDispatch } from "../../../../app/store/store.config";
import { useConfirm } from "material-ui-confirm";
import { setUser } from "../../../../app/store/slices/auth.slice";
import { resetUi } from "../../../../app/store/slices/ui.slice";
import { phoneUtils } from "../../../../lib/utils/phoneUtils";

export function SidebarUser() {
  const { user } = useAuth();
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
  const {
    t,
    i18n: { language, changeLanguage },
  } = useTranslation();
  const dispatch = useAppDispatch();
  const confirm = useConfirm();

  const handleLogout = useCallback(() => {
    confirm({
      title: t("areYouSure"),
      description: t("logoutWarning"),
    }).then(() => {
      dispatch(setUser(null));
      dispatch(resetUi());
      localStorage.clear();
    });
  }, [confirm, dispatch, t]);

  return (
    <>
      <SidebarUserWrapper onClick={(event) => setAnchor(event.currentTarget)}>
        <img src="/boss.jpg" alt="John Doe" />
        <div className="user-info">
          <h1>{user?.full_name}</h1>
          <p>{phoneUtils.formatPhoneNumber(user?.phone || "")}</p>
        </div>
      </SidebarUserWrapper>
      <SidebarMenu
        anchorEl={anchor}
        open={!!anchor}
        onClose={() => setAnchor(null)}
        anchorOrigin={{ horizontal: "left", vertical: "top" }}
        transformOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <MenuItem>
          <ListItemIcon>
            <AccountCircleRounded />
          </ListItemIcon>
          <ListItemText primary={t("profile")} />
        </MenuItem>
        <Divider />

        <MenuItem onClick={() => changeLanguage("uz")}>
          <ListItemIcon>{language === "uz" && <CheckRounded />}</ListItemIcon>
          <ListItemText primary="O'zbek tili" />
        </MenuItem>
        <MenuItem onClick={() => changeLanguage("ru")}>
          <ListItemIcon>{language === "ru" && <CheckRounded />}</ListItemIcon>
          <ListItemText primary="Русский язык" />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutRounded />
          </ListItemIcon>
          <ListItemText primary={t("logout")} />
        </MenuItem>
      </SidebarMenu>
    </>
  );
}
