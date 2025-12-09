import { useGetMeQuery } from '../store/services/authApi';
import { Navigate, Outlet } from 'react-router';

import SideMenu from '../components/layout/SideMenu';
import Header from '../components/layout/Header';
import ModalRoot from '../components/modals/ModalRoot';

const MainLayout = () => {
  const localToken = localStorage.getItem('token');

  const { data, isLoading, isError } = useGetMeQuery(undefined, {
    skip: !localToken,
  });

  const user = data?.user;

  if (!localToken || (isError && !isLoading)) {
    localStorage.removeItem('token');
    return <Navigate to="/auth" replace />;
  }

  if (isLoading) {
    return <div className="p-8 text-center">Загрузка данных профиля...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideMenu user={user} />

      <div className="flex flex-col flex-1">
        <Header user={user} />

        <main className="flex-1 p-6 md:p-8 overflow-auto">
          <Outlet />
        </main>

        <ModalRoot />
      </div>
    </div>
  );
};

export default MainLayout;
