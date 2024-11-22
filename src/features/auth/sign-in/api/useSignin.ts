import { useCallback } from "react";
import { useAppDispatch } from "../../../../app/store/store.config";
import type { SigninDTO } from "../model/SignInDTO";
import { useSigninMutation } from "../../../../app/store/services/auth.service";
import { setUser } from "../../../../app/store/slices/auth.slice";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export function useSignin() {
  const dispatch = useAppDispatch();
  const [signin, { isLoading }] = useSigninMutation();
  const { t } = useTranslation();

  const onSignIn = useCallback(
    async (data: SigninDTO) => {
      try {
        const response = await signin(data).unwrap();
        if (response.code === 0) {
          dispatch(setUser(response.data));
        } else {
          toast.error(t("wrongCredentials"));
        }
      } catch (error: unknown) {
        console.log(error);
        toast.error(t("wrongCredentials"));
      }
    },
    [dispatch, signin, t]
  );

  return { onSignIn, isLoading };
}
