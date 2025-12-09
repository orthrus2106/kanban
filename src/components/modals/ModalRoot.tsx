import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { closeModal, selectModal } from '../../store/slices/modalSlice';

import CreateTaskModal from './CreateTaskModal';

const ModalRoot = () => {
  const modal = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const handleClose = () => dispatch(closeModal());

  if (modal.type === 'createTask' && modal.columnId !== null) {
    return (
      <CreateTaskModal isOpen onClose={handleClose} columnId={modal.columnId} />
    );
  }

  return null;
};

export default ModalRoot;
