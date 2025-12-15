import { useFormik } from 'formik';
import BaseModal from '../ui/modals/BaseModal';
import {
  useUpdateColumnMutation,
  useGetColumnsQuery,
} from '../../store/services/boardApi';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  columnId: number;
};

type FormValues = {
  title: string;
};

const UpdateColumnModal = ({ isOpen, onClose, columnId }: Props) => {
  const [updateColumn, { isLoading }] = useUpdateColumnMutation();
  const { data: columns } = useGetColumnsQuery();

  const column = columns?.find((col) => col.id === columnId);

  const formik = useFormik<FormValues>({
    enableReinitialize: true,
    initialValues: {
      title: column?.title || '',
    },

    validate: (values) => {
      const errors: Partial<FormValues> = {};
      if (!values.title.trim()) {
        errors.title = 'Title is required';
      }
      return errors;
    },

    onSubmit: async (values, { resetForm }) => {
      try {
        await updateColumn({
          id: columnId,
          data: {
            title: values.title.trim(),
          },
        }).unwrap();

        resetForm();
        onClose();
      } catch (e) {
        console.error('Failed to create task', e);
      }
    },
  });

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Update Column">
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="title" className="text-sm font-medium text-slate-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Column name"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
          />
          {formik.touched.title && formik.errors.title && (
            <p className="text-xs text-red-500">{formik.errors.title}</p>
          )}
        </div>

        <div className="mt-2 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? 'Creating...' : 'Create'}
          </button>
        </div>
      </form>
    </BaseModal>
  );
};

export default UpdateColumnModal;
