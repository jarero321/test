import { Login } from './Login';
import { Logout } from './Logout';
import { Register } from './Register';
import { ResetPassword } from './ResetPassword';
import { Temporally } from './Temporally';
import SwitchedComponent from '@/components/UI/SwitchedComponent/SwitchedComponent';
import useStep from '@/hooks/useStep';
import { LayoutAuth } from './components/LayoutAuth';
import BannerAuth from './components/BannerAuth/BannerAuth';

const Authentication = () => {
  const { step } = useStep('step', 'iniciar-sesion');
  return (
    <LayoutAuth bannerAuth={<BannerAuth />}>
      <SwitchedComponent
        active={step}
        className="h-full w-full max-h-screen justify-center flex flex-col gap-[14px] max-w-[350px] 2xl:w-[450px] 2xl:max-w-[500px]"
        target="id"
      >
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
        <div className="w-full" id="temporal">
          <Temporally />
        </div>
      </SwitchedComponent>
    </LayoutAuth>
  );
};

export default Authentication;
