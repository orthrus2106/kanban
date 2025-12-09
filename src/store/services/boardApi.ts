import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../utils/baseQueryWithReauth';
import type { Column, ColumnDTO } from '../../types/board';
import type { Task, CreateTaskDTO } from '../../types/board';

export const boardApi = createApi({
  reducerPath: 'boardApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Columns'],
  endpoints: (builder) => ({
    getColumns: builder.query<Column[], void>({
      query: () => 'columns/',
      transformResponse: (response: ColumnDTO) => {
        return response.columns;
      },
      providesTags: ['Columns'],
    }),
    createTask: builder.mutation<Task, CreateTaskDTO>({
      query: (body) => ({
        url: 'tasks',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Columns'],
    }),
    deleteTask: builder.mutation<void, number>({
      query: (taskId) => ({
        url: `tasks/${taskId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Columns'],
    }),
  }),
});

export const {
  useGetColumnsQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
} = boardApi;
