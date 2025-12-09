import { Routes, Route } from 'react-router';
import AuthPage from './pages/AuthPage';
import RegisterPage from './pages/RegisterPage';
import MainLayout from './layouts/MainLayout';
import KanbanPage from './pages/KanbanPage';

const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<KanbanPage />} />
      </Route>
    </Routes>
  );
};

export default App;
