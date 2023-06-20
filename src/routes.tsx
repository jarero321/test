import { Client } from './pages/Clientes';
import { EstadoCuenta } from './pages/Cuenta';
import Login from './pages/Login/Login';
import { Logout } from './pages/Logout';
import { OnBoarding } from './pages/OnBoarding';
import { Register } from './pages/Register';
import { UserNotRegister } from './pages/UserNotRegister';
import { Welcome } from './pages/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AccountBalances } from './pages/AccountBalances';
import Geolocation from './pages/Geolocalization/Geolocation';
import { Dashboard } from './pages/Dashboard';
import { Notifications } from './pages/Notifications';
import { OperationConfirm } from './pages/OperationConfirm';
import DashboardMoral from './pages/DashboardMoral/Dashboard';
import { ScheduledPayments } from './pages/ ScheduledPayments';
import { PaymentServices } from './pages/PaymentServices';
import { ResetPassword } from './pages/ResetPassword';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { useAuthStore } from './store/auth';

const Router = () => {
  const isAuth = useAuthStore((state) => state.isAuth);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Register />} path="register" />
        <Route element={<Login />} path="login" />
        <Route element={<OnBoarding />} path="onboarding" />
        <Route element={<OnBoarding />} path="onboarding/:person" />
        <Route element={<OnBoarding />} path="onboarding/:person/:step" />
        <Route element={<UserNotRegister />} path="usuario-sin-sat" />
        <Route element={<Welcome />} path="bienvenido" />
        <Route element={<Client />} path="detalles-cliente" />
        <Route element={<EstadoCuenta />} path="estado-cuenta" />
        <Route element={<AccountBalances />} path="saldos-de-cuentas" />
        <Route element={<Geolocation />} path="geolocalizacion" />
        <Route element={<Logout />} path="logout" />
        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route element={<Dashboard />} path="dashboard" />
        </Route>
        <Route element={<DashboardMoral />} path="dashboard-moral" />
        <Route element={<Notifications />} path="notificaciones" />
        <Route element={<OperationConfirm />} path="confirmar-operacion" />
        <Route element={<ScheduledPayments />} path="pagos-programados" />
        <Route element={<PaymentServices />} path="pago-de-servicio" />
        <Route element={<ResetPassword />} path="reestablecer-credenciales" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
