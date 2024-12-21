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
  }),
});

export const { useAuthenticateMutation, useRegisterMutation } = apiSlice;
