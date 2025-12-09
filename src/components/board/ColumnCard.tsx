import type { Column } from '../../types/board';
import TaskCard from './TaskCard';

type Props = {
  column: Column;
};

const ColumnCard = ({ column }: Props) => {
  const sortedTasks = [...column.tasks].sort((a, b) => a.order - b.order);

  return (
    <article className="flex h-full w-72 shrink-0 flex-col rounded-xl border border-slate-200 bg-slate-50/80 shadow-sm">
      <header className="flex items-center justify-between gap-2 border-b border-slate-200 px-4 py-3">
        <h2 className="truncate text-sm font-semibold text-slate-900">
          {column.title}
        </h2>
        <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-medium text-slate-700">
          {column.tasks.length}
        </span>
      </header>

      <div className="flex min-h-[60px] flex-1 flex-col gap-2 overflow-y-auto px-3 py-3">
        {sortedTasks.length === 0 ? (
          <p className="text-xs italic text-slate-400">Пока нет задач</p>
        ) : (
          sortedTasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>

      <footer className="border-t border-slate-200 px-3 py-2.5">
        <button
          type="button"
          className="w-full rounded-md bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50"
        >
          + Add task
        </button>
      </footer>
    </article>
  );
};

export default ColumnCard;
