import { Login } from './Login';
import { Logout } from './Logout';

import { Register } from './Register';
import SwitchedComponent from '@/components/UI/SwitchedComponent/SwitchedComponent';
import useStep from '@/hooks/useStep';
import { ResetPassword } from './ResetPassword';

const Authentication = () => {
  const { step } = useStep('step', 'iniciar-sesion');
  return (
    <SwitchedComponent active={step} target="id">
      <div className="w-full" id="iniciar-sesion">
        <Login />
      </div>
      <div className="w-full" id="registrar-usuario">
        <Register />
      </div>
      <div className="w-full" id="reestablecer-credenciales">
        <ResetPassword />
      </div>
      <div className="w-full" id="cerrar-sesion">
        <Logout />
      </div>
    </SwitchedComponent>
  );
};

export default Authentication;
