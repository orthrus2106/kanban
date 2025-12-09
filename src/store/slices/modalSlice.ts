import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { UiModalState } from '../../types/modals';

const initialState: UiModalState = {
  type: null,
  columnId: null,
  taskId: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openCreateTask(state, action: PayloadAction<{ columnId: number }>) {
      state.type = 'createTask';
      state.columnId = action.payload.columnId;
      state.taskId = null;
    },

    openEditTask(state, action: PayloadAction<{ taskId: number }>) {
      state.type = 'editTask';
      state.taskId = action.payload.taskId;
      state.columnId = null;
    },

    openDeleteTask(state, action: PayloadAction<{ taskId: number }>) {
      state.type = 'deleteTask';
      state.taskId = action.payload.taskId;
      state.columnId = null;
    },

    openCreateColumn(state) {
      state.type = 'createColumn';
      state.columnId = null;
      state.taskId = null;
    },

    openEditColumn(state, action: PayloadAction<{ columnId: number }>) {
      state.type = 'editColumn';
      state.columnId = action.payload.columnId;
      state.taskId = null;
    },

    closeModal(state) {
      state.type = null;
      state.columnId = null;
      state.taskId = null;
    },
  },
});

export const {
  openCreateTask,
  openEditTask,
  openDeleteTask,
  openCreateColumn,
  openEditColumn,
  closeModal,
} = modalSlice.actions;

export default modalSlice.reducer;

export const selectModal = (state: RootState) => state.modal;
