import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { UiModalState } from '../../types/modals';

const initialState: UiModalState = {
  type: null,
  payload: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<UiModalState>) => {
      state.type = action.payload.type;
      state.payload = action.payload.payload;
    },
    closeModal: (state) => {
      state.type = null;
      state.payload = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;

export const selectModal = (state: RootState) => state.modal;
