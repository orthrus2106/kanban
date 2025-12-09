import BaseModal from '../ui/modals/BaseModal';
import { useDeleteTaskMutation } from '../../store/services/boardApi';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  taskId: number;
};

const DeleteTaskModal = ({ isOpen, onClose, taskId }: Props) => {
  const [deleteTask, { isLoading }] = useDeleteTaskMutation();

  const handleConfirm = async () => {
    try {
      await deleteTask(taskId).unwrap();
      onClose();
    } catch (e) {
      console.log('Failed to delete task', e);
    }
  };
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Delete task">
      <div className="space-y-4 text-sm text-slate-700">
        <p>Are you sure you want to delete this task?</p>

        <div className="mt-2 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={isLoading}
            onClick={handleConfirm}
            className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default DeleteTaskModal;
