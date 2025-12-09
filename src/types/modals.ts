export type ModalType =
  | 'createTask'
  | 'editTask'
  | 'createColumn'
  | 'editColumn'
  | 'deleteTask'
  | null;

export type ModalPayload = { columnId: number } | { taskId: number } | null;

export type UiModalState = {
  type: ModalType;
  payload: ModalPayload;
};
