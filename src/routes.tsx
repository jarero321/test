import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Authentication } from './pages/Actual/Authentication';
import { Home } from './pages/Actual/Home';
import { OnBoarding } from './pages/Legacy/UserRegister/OnBoarding';
import Dashboard from '@/pages/Actual/DashBoard/Dashboard';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { useAuthStore } from './store/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GeolocalizationWrapper } from './pages/Actual/Geolocalization/components/GeolocalizationWrapper/GeolocalizationWrapper';
import Geolocation from './pages/Actual/Geolocalization/Geolocation';
const Router = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  return (
    <BrowserRouter>
      <GeolocalizationWrapper>
        <ToastContainer />
        <Routes>
          <Route
            element={
              isAuth ? (
                <Navigate to="/dashboard" />
              ) : (
                <Navigate to="/autenticacion/iniciar-sesion" />
              )
            }
            path="/"
          />
          <Route element={<Home />} path="/" />
          <Route element={<Geolocation />} path="/geolocalizacion/:step?" />
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
      </GeolocalizationWrapper>
    </BrowserRouter>
  );
};

export default Router;
