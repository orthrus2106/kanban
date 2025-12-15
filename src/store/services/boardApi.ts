import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../utils/baseQueryWithReauth';
import type { Column, GetColumnsResponse } from '../../types/board';
import type {
  Task,
  CreateTaskDTO,
  CreateColumnDTO,
  CreateColumnResponse,
  UpdateTaskResponse,
  UpdateTaskArgs,
  UpdateColumnResponse,
  UpdateColumnArgs,
} from '../../types/board';

export const boardApi = createApi({
  reducerPath: 'boardApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Columns'],
  endpoints: (builder) => ({
    getColumns: builder.query<Column[], void>({
      query: () => 'columns/',
      transformResponse: (response: GetColumnsResponse) => {
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
    createColumn: builder.mutation<CreateColumnResponse, CreateColumnDTO>({
      query: (body) => ({
        url: 'columns/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Columns'],
    }),
    deleteColumn: builder.mutation<void, number>({
      query: (columnId) => ({
        url: `columns/${columnId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Columns'],
    }),
    updateTask: builder.mutation<UpdateTaskResponse, UpdateTaskArgs>({
      query: ({ id, data }) => ({
        url: `tasks/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Columns'],
    }),
    updateColumn: builder.mutation<UpdateColumnResponse, UpdateColumnArgs>({
      query: ({ id, data }) => ({
        url: `columns/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Columns'],
    }),
  }),
});

export const {
  useGetColumnsQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useCreateColumnMutation,
  useDeleteColumnMutation,
  useUpdateTaskMutation,
} = boardApi;
