import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./services/auth.service";
import authSlice from "./slices/auth.slice";
import uiSlice from "./slices/ui.slice";
import { configApi } from "./services/config.service";
import { employeesApi } from "./services/employees.service";

export const reducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [configApi.reducerPath]: configApi.reducer,
  [employeesApi.reducerPath]: employeesApi.reducer,
  auth: authSlice,
  ui: uiSlice,
});
