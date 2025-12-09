import { Menu, MenuButton } from '@headlessui/react';
import type { Task } from '../../types/board';
import TaskDropDown from './TaskDropDown';

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className="relative rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs shadow-sm cursor-pointer">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="text-[13px] font-medium text-slate-900">
            {task.title}
          </div>

          {task.description && (
            <p className="mt-1 line-clamp-2 text-[11px] text-slate-500">
              {task.description}
            </p>
          )}
        </div>

        <Menu as="div" className="relative ml-1 shrink-0">
          <MenuButton
            type="button"
            className="inline-flex h-6 w-6 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-600 focus:outline-none"
          >
            <i className="bi bi-three-dots-vertical text-[14px]" />
          </MenuButton>

          <TaskDropDown taskId={task.id} />
        </Menu>
      </div>
    </div>
  );
};

export default TaskCard;
