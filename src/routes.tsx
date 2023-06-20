import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Authentication } from './pages/Actual/Authentication';
import { Home } from './pages/Actual/Home';
import { OnBoarding } from './pages/Legacy/UserRegister/OnBoarding';
import Dashboard from '@/pages/Actual/DashBoard/Dashboard';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { useAuthStore } from './store/auth';
const Router = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Authentication />} path="autenticacion/:step?" />
        <Route
          element={
            <ProtectedRoute isAllowed={isAuth}>
              <OnBoarding />
            </ProtectedRoute>
          }
          path="onboarding/:person?/:step?"
        />
        <Route
          element={
            <ProtectedRoute isAllowed={isAuth}>
              <Dashboard />
            </ProtectedRoute>
          }
          path="dashboard/:step?"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
