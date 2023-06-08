import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import { ResetPassword } from './pages/ResetPassword';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<Register />} path="registrate" /> */}
        <Route element={<Login />} path="iniciar-sesion" />
        {/* <Route element={<OnBoarding />} path="onboarding" />
        <Route element={<OnBoarding />} path="onboarding/:person" />
        <Route element={<OnBoarding />} path="onboarding/:person/:step" />
        <Route element={<UserNotRegister />} path="usuario-sin-sat" />
        <Route element={<Welcome />} path="bienvenido" />
        <Route element={<Client />} path="detalles-cliente" />
        <Route element={<EstadoCuenta />} path="estado-cuenta" />
        <Route element={<AccountBalances />} path="saldos-de-cuentas" />
        <Route element={<Geolocation />} path="geolocalizacion" />
        <Route element={<Logout />} path="logout" />
        <Route element={<Dashboard />} path="dashboard" />
        <Route element={<DashboardMoral />} path="dashboard-moral" />
        <Route element={<Notifications />} path="notificaciones" />
        <Route element={<OperationConfirm />} path="confirmar-operacion" />
        <Route element={<ScheduledPayments />} path="pagos-programados" />
        <Route element={<PaymentServices />} path="pago-de-servicio" /> */}
        <Route element={<ResetPassword />} path="recuperar-contraseña" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
