import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { envVars } from "../../../config/env";
import type { BaseApi, RequestParamsType } from "../../../@types";
import type { User } from "../../../entities/User";
import type { SigninDTO } from "../../../features";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: envVars.BASE_URL,
  }),
  endpoints: (builder) => ({
    signin: builder.mutation<BaseApi<User>, SigninDTO>({
      query: (body) => ({
        url: "signIn",
        body,
        method: "POST",
      }),
    }),
    getMe: builder.query<BaseApi<User[]>, RequestParamsType>({
      query: (params) => ({
        url: "userByID",
        params,
      }),
    }),
  }),
});

export const { useSigninMutation, useGetMeQuery } = authApi;
