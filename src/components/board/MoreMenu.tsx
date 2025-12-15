import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

const MoreMenu = ({ onEdit, onDelete }: Props) => {
  return (
    <Menu as="div" className="relative">
      <MenuButton
        type="button"
        className="inline-flex h-6 w-6 items-center justify-center rounded-md
                   text-slate-400 hover:bg-slate-100 hover:text-slate-600"
      >
        <i className="bi bi-three-dots-vertical text-[14px]" />
      </MenuButton>

      <MenuItems
        className="absolute right-0 top-7 z-50 w-32 origin-top-right
                   rounded-md border border-slate-200 bg-white py-1
                   text-sm shadow-lg focus:outline-none"
      >
        <MenuItem>
          <button
            type="button"
            onClick={onEdit}
            className="flex w-full items-center gap-2 px-2 py-1.5
                       rounded-md text-left hover:bg-slate-100"
          >
            <i className="bi bi-pencil" />
            Edit
          </button>
        </MenuItem>

        <MenuItem>
          <button
            type="button"
            onClick={onDelete}
            className="flex w-full items-center gap-2 px-2 py-1.5
                       rounded-md text-left text-red-600 hover:bg-slate-100"
          >
            <i className="bi bi-trash" />
            Delete
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default MoreMenu;
