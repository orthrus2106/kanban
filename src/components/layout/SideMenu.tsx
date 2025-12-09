import { NavLink } from 'react-router';
import type { UserDetails } from '../../types/login';

type Props = {
  user: UserDetails | undefined;
};

const navItems = [
  { to: '/', label: 'Board' },
  { to: '/my-tasks', label: 'My tasks' },
  { to: '/settings', label: 'Settings' },
];

const SideMenu = ({ user }: Props) => {
  const initials =
    user?.name
      ?.split(' ')
      .map((p) => p[0])
      .join('')
      .toUpperCase() || 'U';

  return (
    <aside className="hidden w-64 flex-col border-r border-slate-200 bg-slate-950/95 text-slate-100 md:flex">
      <div className="flex h-16 items-center gap-2 border-b border-slate-800 px-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-sm font-bold text-slate-950">
          K
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Kanban</span>
          <span className="text-[11px] text-slate-400">Personal board</span>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4 text-sm">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            className={({ isActive }) =>
              [
                'flex items-center gap-2 rounded-md px-3 py-2 transition-colors',
                isActive
                  ? 'bg-slate-800 text-slate-50'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-slate-50',
              ].join(' ')
            }
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-slate-800 px-4 py-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-[11px] font-semibold text-slate-50">
            {initials}
          </div>
          <div className="flex flex-col">
            <span className="max-w-[130px] truncate font-medium">
              {user?.name ?? 'User'}
            </span>
            <span className="max-w-[130px] truncate text-slate-400">
              {user?.email ?? 'no-email@example.com'}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
