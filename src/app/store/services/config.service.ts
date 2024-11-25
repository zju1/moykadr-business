import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { envVars } from "../../../config/env";
import type { BaseApi, RequestParamsType } from "../../../@types";
import type { BranchDTO } from "../../../features/settings/branch/model/BranchDTO";
import type { Branch } from "../../../entities/Branch";
import type { RootState } from "../store.config";

export const configApi = createApi({
  reducerPath: "configApi",
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
  tagTypes: ["BRANCHES"],
  endpoints: (builder) => ({
    // #region BRANCHES CRUD
    createBranch: builder.mutation<BaseApi<Branch>, BranchDTO>({
      query: (body) => ({
        url: "branch",
        body,
        method: "POST",
      }),
      invalidatesTags: ["BRANCHES"],
    }),
    updateBranch: builder.mutation<BaseApi<Branch>, BranchDTO>({
      query: (body) => ({
        url: "branch",
        body,
        method: "PUT",
      }),
      invalidatesTags: ["BRANCHES"],
    }),
    deleteBranch: builder.mutation<BaseApi<Branch>, RequestParamsType>({
      query: (params) => ({
        url: "branch",
        params,
        method: "DELETE",
      }),
      invalidatesTags: ["BRANCHES"],
    }),
    getBranches: builder.query<BaseApi<Branch[]>, RequestParamsType>({
      query: (params) => ({
        url: "branches",
        params,
      }),
      providesTags: ["BRANCHES"],
    }),
    // #endregion
  }),
});

export const {
  useCreateBranchMutation,
  useGetBranchesQuery,
  useUpdateBranchMutation,
  useDeleteBranchMutation,
} = configApi;
