import { useState } from 'react';
import { Header } from '../Configuration/components/Header';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import Beneficiaries from './Beneficiaries/Beneficiaries';
import useStep from '@/hooks/useStep';

import SwitchedComponent from '@/components/UI/SwitchedComponent/SwitchedComponent';
import { UploadBeneficiaries } from './Beneficiaries/UploadBeneficiaries';
import { Security } from './Security/Security';
import { MyAccount } from './MyAccount/MyAccount';
import EditAddress from './MyAccount/EditAddress/EditAddress';

function Configuration() {
  const [selectedButton, setSelectedButton] = useState('Button 1');

  const handleButtonSelect = (button: string) => {
    setSelectedButton(button);
  };
  const { step } = useStep('step');

  return (
    <div className="px-[40px]">
      <Header />
      <ButtonGroup
        buttons={['Mi cuenta', 'Perfiles', 'Beneficiarios', 'Seguridad']}
        selectedButton={selectedButton}
        onButtonSelect={handleButtonSelect}
      />
      {selectedButton === 'Mi cuenta' && <MyAccount />}
      {selectedButton === 'Beneficiarios' && <Beneficiaries />}
      {selectedButton === 'Seguridad' && <Security />}
    </div>
  );
}

export default Configuration;
