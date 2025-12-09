// components/board/TaskMenu.tsx
import { MenuItem, MenuItems } from '@headlessui/react';
import { useAppDispatch } from '../../hooks/storeHooks';
import { openEditTask, openDeleteTask } from '../../store/slices/modalSlice';

type Props = {
  taskId: number;
};

const TaskDropDown = ({ taskId }: Props) => {
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    dispatch(openEditTask({ taskId }));
  };

  const handleDelete = () => {
    dispatch(openDeleteTask({ taskId }));
  };

  return (
    <MenuItems className="absolute right-2 top-2 z-50 w-36 origin-top-right rounded-md border border-slate-200 bg-white py-1 text-sm shadow-lg focus:outline-none">
      <MenuItem>
        <button
          type="button"
          className="w-full flex items-center justify-start gap-2 px-2 py-1.5 text-left hover:bg-slate-100 rounded-md cursor-pointer"
          onClick={handleEdit}
        >
          <i className="bi bi-pencil"></i>
          Edit task
        </button>
      </MenuItem>

      <MenuItem>
        <button
          type="button"
          className="w-full flex items-center justify-start gap-2 px-2 py-1.5 text-left text-red-600 hover:bg-slate-100 rounded-md cursor-pointer"
          onClick={handleDelete}
        >
          <i className="bi bi-trash"></i>
          Delete task
        </button>
      </MenuItem>
    </MenuItems>
  );
};

export default TaskDropDown;
