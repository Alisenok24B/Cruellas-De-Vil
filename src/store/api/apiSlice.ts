// apiSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URLs } from "../../__data__/urls";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${URLs.api.main}`, // Базовый URL
  }),
  tagTypes: ['Dogsitter'],
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
        providesTags: (result, error, id) => [{ type: 'Dogsitter', id }],
    }),
    updateUserProfile: builder.mutation({
      query: (updateData) => ({
        url: `/users/${updateData.id}`,
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: updateData.data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Dogsitter', id }],
    }),
    updateDogsitterRating: builder.mutation({
      query: ({ id, rating }) => ({
        url: `/dogsitter-viewing/rating/${id}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { rating },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Dogsitter", id }],
    }),    
  }),
});

export const {
  useAuthenticateMutation,
  useRegisterMutation,
  useVerifyTwoFactorAuthMutation,
  useFetchUsersQuery,
  useGetDogsitterByIdQuery,
  useUpdateUserProfileMutation,
  useUpdateDogsitterRatingMutation, 
} = apiSlice;
