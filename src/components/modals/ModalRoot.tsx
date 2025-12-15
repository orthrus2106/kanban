import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { closeModal, selectModal } from '../../store/slices/modalSlice';
import CreateColumnModal from './CreateColumnModal';

import CreateTaskModal from './CreateTaskModal';
import DeleteTaskModal from './DeleteTaskModal';
import DeleteColumnModal from './DeleteColumnModal';
import UpdateTaskModal from './UpdateTaskModal';
import UpdateColumnModal from './UpdateColumnModal';

const ModalRoot = () => {
  const modal = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const handleClose = () => dispatch(closeModal());

  if (modal.type === 'createTask' && modal.columnId !== null) {
    return (
      <CreateTaskModal isOpen onClose={handleClose} columnId={modal.columnId} />
    );
  }

  if (modal.type === 'deleteTask' && modal.taskId !== null) {
    return (
      <DeleteTaskModal isOpen onClose={handleClose} taskId={modal.taskId} />
    );
  }

  if (modal.type === 'deleteColumn' && modal.columnId !== null) {
    return (
      <DeleteColumnModal
        isOpen
        onClose={handleClose}
        columnId={modal.columnId}
      />
    );
  }

  if (modal.type === 'createColumn') {
    return <CreateColumnModal isOpen onClose={handleClose} />;
  }

  if (modal.type === 'editTask' && modal.taskId !== null) {
    return (
      <UpdateTaskModal isOpen onClose={handleClose} taskId={modal.taskId} />
    );
  }

  if (modal.type === 'editColumn' && modal.columnId !== null) {
    return (
      <UpdateColumnModal
        isOpen
        onClose={handleClose}
        columnId={modal.columnId}
      />
    );
  }

  return null;
};

export default ModalRoot;
