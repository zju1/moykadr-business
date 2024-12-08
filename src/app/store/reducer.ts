import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./services/auth.service";
import authSlice from "./slices/auth.slice";
import uiSlice from "./slices/ui.slice";
import { configApi } from "./services/config.service";
import { employeesApi } from "./services/employees.service";
import { reportsApi } from "./services/reports.service";

export const reducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [configApi.reducerPath]: configApi.reducer,
  [employeesApi.reducerPath]: employeesApi.reducer,
  [reportsApi.reducerPath]: reportsApi.reducer,
  auth: authSlice,
  ui: uiSlice,
});
