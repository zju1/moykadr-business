/* eslint-disable @typescript-eslint/no-explicit-any */
import { Middleware } from "@reduxjs/toolkit";
import { setUser } from "../slices/auth.slice";
import { resetUi } from "../slices/ui.slice";

export const authMiddleWare: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action: any) => {
    if (action?.payload?.status === 401) {
      dispatch(setUser(null));
      dispatch(resetUi());
      localStorage.clear();
    }
    next(action);
  };
