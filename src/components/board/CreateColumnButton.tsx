import { useAppDispatch } from '../../hooks/storeHooks';
import { openCreateColumn } from '../../store/slices/modalSlice';

const CreateColumnButton = () => {
  const dispatch = useAppDispatch();

  const handleCreateColumn = () => {
    dispatch(openCreateColumn());
  };
  return (
    <button
      type="button"
      onClick={handleCreateColumn}
      className="h-fit min-h-[120px] w-72
                 rounded-xl border border-dashed border-slate-300 cursor-pointer
                 bg-slate-100/60 text-sm font-medium text-slate-500
                 hover:border-slate-400 hover:bg-slate-100"
    >
      + Add column
    </button>
  );
};

export default CreateColumnButton;
