import SwitchedComponent from '@/components/UI/SwitchedComponent/SwitchedComponent';
import useStep from '@/hooks/useStep';
import Home from './Home/Dashboard/Home';
import { LayoutV2 } from '@/components';
import { Receivers } from './Receivers';
import { UploadReceivers } from './UploadReceivers';
import Configuration from './Configuration/Configuration';
import { UploadBeneficiaries } from './Configuration/UploadBeneficiaries';

const Dashboard = () => {
  const { step } = useStep('step', 'inicio');
  return (
    <LayoutV2>
      <SwitchedComponent active={step} target="id">
        <div className="w-full" id="inicio">
          <Home />
        </div>
        <div className="w-full" id="destinatarios">
          <Receivers />
        </div>
        <div className="w-full" id="alta-nuevo-destinatario">
          <UploadReceivers />
        </div>
        <div className="w-full" id="configuracion">
          <Configuration />
        </div>
        <div className="w-full" id="alta-nuevo-beneficiario">
          <UploadBeneficiaries />
        </div>
        <div className="w-full" id="cerrar-sesion"></div>
      </SwitchedComponent>
    </LayoutV2>
  );
};

export default Dashboard;
