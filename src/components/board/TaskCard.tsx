import type { Task } from '../../types/board';

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className="group cursor-pointer rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs shadow-sm transition hover:border-slate-300 hover:bg-slate-50">
      <div className="text-[13px] font-medium text-slate-900">{task.title}</div>

      {task.description && (
        <p className="mt-1 line-clamp-2 text-[11px] text-slate-500">
          {task.description}
        </p>
      )}
    </div>
  );
};

export default TaskCard;
