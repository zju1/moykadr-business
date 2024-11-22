import { useTranslation } from "react-i18next";
import {
  SPContent,
  SPFormHeader,
  SPFormItems,
  SPHeader,
  SPSheet,
  SPWrapper,
} from "./signin-page.style";
import { FormField } from "../../../../lib/shared/FormField";
import { useForm } from "react-hook-form";
import type { SigninDTO } from "../model/SignInDTO";
import { Button } from "@mui/material";
import { PasswordField } from "../../../../lib/shared/PasswordField";
import { requiredRule } from "../../../../config/rules";
import { useSignin } from "../api/useSignin";
import { useAuth } from "../../../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const defaultValues: SigninDTO = {
  login: "",
  password: "",
};

export function SignInPage() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { control, handleSubmit } = useForm<SigninDTO>({ defaultValues });
  const { onSignIn, isLoading } = useSignin();

  const onSubmit = handleSubmit(onSignIn);

  return user ? (
    <Navigate to="/" />
  ) : (
    <SPWrapper>
      <SPHeader>
        <div className="content">
          <img src="/logo-full-white.svg" alt="" />
        </div>
      </SPHeader>
      <SPContent>
        <SPSheet>
          <SPFormHeader>
            <h1>{t("authorize")}</h1>
            <p>{t("signinSubtitle")}</p>
          </SPFormHeader>
          <SPFormItems>
            <FormField
              control={control}
              name="login"
              label={t("username")}
              placeholder={t("username")}
              rules={{ ...requiredRule }}
              size="small"
            />
            <PasswordField
              control={control}
              name="password"
              label={t("password")}
              placeholder={t("password")}
              rules={{ ...requiredRule }}
              size="small"
            />
            <Button
              onClick={onSubmit}
              variant="contained"
              sx={{ marginTop: "24px" }}
              size="small"
              disabled={isLoading}
            >
              {t("signIn")}
            </Button>
          </SPFormItems>
        </SPSheet>
      </SPContent>
    </SPWrapper>
  );
}
