import type { UserDetails } from '../../types/login';

type Props = {
  user: UserDetails | undefined;
};

const Header = ({ user }: Props) => {
  const initials =
    user?.name
      ?.split(' ')
      .map((p) => p[0])
      .join('')
      .toUpperCase() || 'U';

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/auth';
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <div className="flex flex-col">
          <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Dashboard
          </span>
          <span className="text-lg font-semibold text-slate-900">
            Your Kanban board
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="hidden text-right text-xs md:block">
              <div className="font-medium text-slate-900">{user?.name}</div>
              <div className="text-slate-500">{user?.email}</div>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white"
            >
              {initials}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
