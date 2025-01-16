// apiSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URLs } from "../../__data__/urls";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${URLs.api.main}`, // Базовый URL
  }),
  endpoints: (builder) => ({
    authenticate: builder.mutation({
      query: (credentials: { phoneNumber: string; password: string }) => ({
        url: "/auth",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (formData: {
        firstName: string;
        secondName: string;
        phoneNumber: string;
        password: string;
        role: string;
      }) => ({
        url: "/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      }),
    }),
    verifyTwoFactorAuth: builder.mutation({
      query: (code: { code: string }) => ({
        url: "/auth/2fa",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: code,
      }),
    }),
    fetchUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
    getDogsitterById: builder.query({
        query: (id: number) => `/dogsitter-viewing?id=${id}`,
    }),
  }),
});

export const {
  useAuthenticateMutation,
  useRegisterMutation,
  useVerifyTwoFactorAuthMutation,
  useFetchUsersQuery,
  useGetDogsitterByIdQuery
} = apiSlice;
