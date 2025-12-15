import type { Task } from '../../types/board';

import MoreMenu from './MoreMenu';
import { openEditTask, openDeleteTask } from '../../store/slices/modalSlice';

import { useAppDispatch } from '../../hooks/storeHooks';

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  const dispatch = useAppDispatch();

  const handleOpenEditTask = () => {
    dispatch(openEditTask({ taskId: task.id }));
  };

  const handleDeleteTask = () => {
    dispatch(openDeleteTask({ taskId: task.id }));
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs shadow-sm cursor-pointer">
      <div className="flex justify-between gap-2">
        <div>
          <div className="font-medium">{task.title}</div>
          {task.description && <p className="text-xs">{task.description}</p>}
        </div>

        <MoreMenu onEdit={handleOpenEditTask} onDelete={handleDeleteTask} />
      </div>
    </div>
  );
};

export default TaskCard;
