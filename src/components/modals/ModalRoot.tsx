import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { closeModal, selectModal } from '../../store/slices/modalSlice';
import CreateColumnModal from './CreateColumnModal';

import CreateTaskModal from './CreateTaskModal';
import DeleteTaskModal from './DeleteTaskModal';

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

  if (modal.type === 'createColumn') {
    return <CreateColumnModal isOpen onClose={handleClose} />;
  }

  return null;
};

export default ModalRoot;
