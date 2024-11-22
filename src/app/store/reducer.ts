import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./services/auth.service";
import authSlice from "./slices/auth.slice";
import uiSlice from "./slices/ui.slice";

export const reducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  auth: authSlice,
  ui: uiSlice,
});
