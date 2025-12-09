import type { Column } from '../../types/board';
import ColumnCard from './ColumnCard';
import CreateColumnButton from './CreateColumnButton';

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

          <CreateColumnButton />
        </div>
      </div>
    </section>
  );
};

export default Board;
