import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../utils/baseQueryWithReauth';
import type {
  LoginRequest,
  LoginResponse,
  UserDetailsDTO,
} from '../../types/login';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Profile'],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Profile'],
    }),
    getMe: builder.query<UserDetailsDTO, void>({
      query: () => 'auth/me',
      providesTags: ['Profile'],
    }),
  }),
});

export const { useLoginMutation, useGetMeQuery } = authApi;
