import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Authentication } from './pages/Actual/Authentication';
import { Home } from './pages/Actual/Home';
import { OnBoarding } from './pages/Legacy/UserRegister/OnBoarding';
import { Dashboard } from './pages/Actual/DashBoard/Dashboard';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Authentication />} path="autenticacion/:step?" />
        <Route element={<OnBoarding />} path="onboarding/:person?/:step?" />
        <Route element={<Dashboard />} path="tablero-persona-fisica" />
        <Route element={<Dashboard />} path="tablero-persona-moral" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
