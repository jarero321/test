import SwitchedComponent from '@/components/UI/SwitchedComponent/SwitchedComponent';
import useStep from '@/hooks/useStep';
import Home from './Home/Dashboard/Home';
import { LayoutV2 } from '@/components';
import { Receivers } from './Receivers';
import { UploadReceivers } from './UploadReceivers';
import Configuration from './Configuration/Configuration';
import { EditAddress } from './Configuration/sections/MyAccount/sections/EditAddress';
import UploadUser from './Configuration/sections/Profiles/containers/UsersTable/components/UploadUser/UploadUser';
import { UploadBeneficiaries } from './Configuration/sections/Beneficiaries/containers/UploadBeneficiaries';
import SpeiPayments from './SpeiPayments/SpeiPayments';
import { Reports } from './Reports';
import { Help } from './Help';

const Dashboard = () => {
  const { step } = useStep('step', 'inicio');
  return (
    <LayoutV2>
      <section className="w-full max-w-[1000px] 2xl:max-w-[1500px] ">
        <SwitchedComponent active={step} target="id">
          <div className="w-full" id="inicio">
            <Home />
          </div>
          <div className="w-full" id="spei">
            <SpeiPayments />
          </div>
          <div className="w-full" id="destinatarios">
            <Receivers />
          </div>
          <div className="w-full" id="reportes">
            <Reports />
          </div>
          <div className="w-full" id="alta-nuevo-destinatario">
            <UploadReceivers />
          </div>
          <div className="w-full" id="configuracion">
            <Configuration />
          </div>
          <div className="w-full" id="ayuda">
            <Help />
          </div>
          <div className="w-full" id="alta-nuevo-beneficiario">
            <UploadBeneficiaries />
          </div>
          <div className="w-full" id="alta-nuevo-usuario">
            <UploadUser />
          </div>
          <div className="w-full" id="editar-direccion">
            <EditAddress />
          </div>
          <div className="w-full" id="cerrar-sesion"></div>
        </SwitchedComponent>
      </section>
    </LayoutV2>
  );
};

export default Dashboard;
