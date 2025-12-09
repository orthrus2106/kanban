import type { Column } from '../../types/board';
import ColumnCard from './ColumnCard';

type Props = {
  columns: Column[];
};

const Board = ({ columns }: Props) => {
  const sortedColumns = [...columns].sort((a, b) => a.order - b.order);

  return (
    <section className="flex h-full flex-col gap-4">
      <div className="flex items-center border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Board</h1>
          <p className="text-sm text-slate-500">Manage tasks using drap&drop</p>
        </div>
        {/* <button
          type="button"
          className="hidden rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 md:inline-flex"
        >
          New column
        </button> */}
      </div>
      <div className="mb-4">
        <div
          className="
      grid gap-4 pb-4 items-start
      grid-cols-[repeat(auto-fit,minmax(18rem,18rem))]
    "
        >
          {sortedColumns.map((col) => (
            <ColumnCard key={col.id} column={col} />
          ))}

          <button
            type="button"
            className="h-fit min-h-[120px] w-72
                 rounded-xl border border-dashed border-slate-300 cursor-pointer
                 bg-slate-100/60 text-sm font-medium text-slate-500
                 hover:border-slate-400 hover:bg-slate-100"
          >
            + Add column
          </button>
        </div>
      </div>
    </section>
  );
};

export default Board;
