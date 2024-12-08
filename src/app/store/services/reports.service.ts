import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { envVars } from "../../../config/env";
import type { BaseApi, RequestParamsType } from "../../../@types";
import type { Branch } from "../../../entities/Branch";
import type { RootState } from "../store.config";
import type { AttendanceItem } from "../../../features/attendance/model/AttendanceDTO";

export const reportsApi = createApi({
  reducerPath: "reportsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: envVars.BASE_URL,
    prepareHeaders: (headers, api) => {
      const state = api.getState() as RootState;
      const user = state.auth.user;

      if (user) {
        headers.set("Authorization", `Bearer ${user.token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["TABEL"],
  endpoints: (builder) => ({
    getTabel: builder.query<BaseApi<AttendanceItem[]>, RequestParamsType>({
      query: (params) => ({
        url: "usersTabel",
        params,
      }),
      providesTags: ["TABEL"],
    }),
    // #endregion
  }),
});

export const { useGetTabelQuery } = reportsApi;
