export type ModalType =
  | 'createTask'
  | 'editTask'
  | 'createColumn'
  | 'editColumn'
  | 'deleteColumn'
  | 'deleteTask'
  | null;

export interface UiModalState {
  type: ModalType;
  columnId: number | null;
  taskId: number | null;
}
