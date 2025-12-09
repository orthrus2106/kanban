import Board from '../components/board/Board';
import { useGetColumnsQuery } from '../store/services/boardApi';

const Kanbanpage = () => {
  const { data: columns, isLoading, isError } = useGetColumnsQuery();

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="rounded-lg bg-white px-4 py-2 text-sm text-slate-600 shadow">
          Loading columns...
        </div>
      </div>
    );
  }

  if (isError || !columns) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="rounded-lg bg-white px-4 py-2 text-sm text-slate-600 shadow">
          Error while loading board
        </div>
      </div>
    );
  }
  if (!columns.length) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
        <h2 className="text-lg font-semibold text-slate-900">
          Dashboard has no columns
        </h2>
        <p className="max-w-xs text-sm text-slate-500">
          Add your first column to start manage tasks
        </p>
        <button
          type="button"
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white"
        >
          Add column
        </button>
      </div>
    );
  }

  return <Board columns={columns} />;
};

export default Kanbanpage;
