import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { envVars } from "../../../config/env";
import type { BaseApi, RequestParamsType } from "../../../@types";
import type { RootState } from "../store.config";
import type { UserDTO } from "../../../features/employees";
import type { Employee } from "../../../entities/Employee";

export const employeesApi = createApi({
  reducerPath: "employeesApi",
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
  tagTypes: ["EMPLOYEES"],
  endpoints: (builder) => ({
    // #region EMPLOYEES CRUD
    createEmployee: builder.mutation<BaseApi<Employee>, UserDTO>({
      query: (body) => ({
        url: "user",
        body,
        method: "POST",
      }),
      invalidatesTags: ["EMPLOYEES"],
    }),
    updateEmployee: builder.mutation<BaseApi<Employee>, UserDTO>({
      query: (body) => ({
        url: "user",
        body,
        method: "PUT",
      }),
      invalidatesTags: ["EMPLOYEES"],
    }),
    deleteEmployee: builder.mutation<BaseApi<Employee>, RequestParamsType>({
      query: (params) => ({
        url: "user",
        params,
        method: "DELETE",
      }),
      invalidatesTags: ["EMPLOYEES"],
    }),
    getEmployees: builder.query<BaseApi<Employee[]>, RequestParamsType>({
      query: (params) => ({
        url: "users",
        params,
      }),
      providesTags: ["EMPLOYEES"],
    }),
    getEmployeeById: builder.query<BaseApi<Employee[]>, RequestParamsType>({
      query: (params) => ({
        url: "userByID",
        params,
      }),
      providesTags: ["EMPLOYEES"],
    }),
    // #endregion
  }),
});

export const {
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
  useGetEmployeesQuery,
  useGetEmployeeByIdQuery,
} = employeesApi;
