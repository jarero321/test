import { useState } from 'react';
import { Header } from '../Configuration/components/Header';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import { Button } from '@/components';
import { TableReceivers } from '../Receivers/components/TableReceivers';
import { useNavigate } from 'react-router-dom';
import Beneficiaries from './Beneficiaries/Beneficiaries';
import useStep from '@/hooks/useStep';

import SwitchedComponent from '@/components/UI/SwitchedComponent/SwitchedComponent';
import { UploadBeneficiaries } from './Beneficiaries/UploadBeneficiaries';
import { Security } from './Security/Security';

function Configuration() {
  const [selectedButton, setSelectedButton] = useState('Button 1');

  const handleButtonSelect = (button: string) => {
    setSelectedButton(button);
  };
  const { step } = useStep('step', 'inicio');

  return (
    <div className="px-[40px]">
      <Header />
      <ButtonGroup
        buttons={['Mi cuenta', 'Perfiles', 'Beneficiarios', 'Seguridad']}
        selectedButton={selectedButton}
        onButtonSelect={handleButtonSelect}
      />
      {selectedButton === 'Beneficiarios' && <Beneficiaries />}
      {selectedButton === 'Seguridad' && <Security />}
      <SwitchedComponent active={step} target="id">
        <div className="w-full" id="alta-nuevo-benefiario">
          <UploadBeneficiaries />
        </div>
      </SwitchedComponent>
    </div>
  );
}

export default Configuration;
