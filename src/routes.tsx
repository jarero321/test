import { ScheduledPayments } from './pages/ScheduledPayments';
import { AccountBalances } from './pages/AccountBalances';
import { Logout } from './pages/Authentication';
import Authentication from './pages/Authentication/Authentication';
import { Client } from './pages/Clientes';
import { EstadoCuenta } from './pages/Cuenta';
import { Dashboard } from './pages/Dashboard';
import Geolocation from './pages/Geolocalization/Geolocation';
import { Notifications } from './pages/Notifications';
import { OperationConfirm } from './pages/OperationConfirm';
import { PaymentServices } from './pages/PaymentServices';
import { UserNotRegister } from './pages/UserNotRegister';
import { OnBoarding } from './pages/UserRegister/OnBoarding';
import { Welcome } from './pages/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Authentication />} path="autenticacion/:step?" />
        <Route element={<OnBoarding />} path="onboarding/:person?/:step?" />
        <Route element={<UserNotRegister />} path="usuario-sin-sat" />
        <Route element={<Welcome />} path="bienvenido" />
        <Route element={<Client />} path="detalles-cliente" />
        <Route element={<EstadoCuenta />} path="estado-cuenta" />
        <Route element={<AccountBalances />} path="saldos-de-cuentas" />
        <Route element={<Geolocation />} path="geolocalizacion" />
        <Route element={<Logout />} path="logout" />
        <Route element={<Dashboard />} path="tablero-persona-fisica" />
        <Route element={<Dashboard />} path="tablero-persona-moral" />
        <Route element={<Notifications />} path="notificaciones" />
        <Route element={<OperationConfirm />} path="confirmar-operacion" />
        <Route element={<ScheduledPayments />} path="pagos-programados" />
        <Route element={<PaymentServices />} path="pago-de-servicio" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
