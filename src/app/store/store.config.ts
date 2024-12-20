/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  persistReducer,
  PersistConfig,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authApi } from "./services/auth.service";
import { reducer } from "./reducer";

import { authMiddleWare } from "./middlewares/authMiddleware";
import { envVars } from "../../config/env";
import { configApi } from "./services/config.service";
import { employeesApi } from "./services/employees.service";
import { reportsApi } from "./services/reports.service";

const persistConfig: PersistConfig<any> = {
  key: "root",
  storage,
  blacklist: [
    authApi.reducerPath,
    configApi.reducerPath,
    employeesApi.reducerPath,
    reportsApi.reducerPath,
  ],
};

const persistedReducer = persistReducer(persistConfig, reducer as any);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: !envVars.IS_PRODUCTION,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      authApi.middleware,
      configApi.middleware,
      employeesApi.middleware,
      reportsApi.middleware,
      authMiddleWare
    );
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
