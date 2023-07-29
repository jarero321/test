import { useState } from 'react';
import { Header } from '../Configuration/components/Header';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import { Beneficiaries } from './sections/Beneficiaries';
import useStep from '@/hooks/useStep';
import { Security } from './sections/Security/Security';
import { MyAccount } from './MyAccount/MyAccount';
import Profiles from './Profiles/Profiles';

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
      {selectedButton === 'Perfiles' && <Profiles />}
      {selectedButton === 'Beneficiarios' && <Beneficiaries />}
      {selectedButton === 'Seguridad' && <Security />}
    </div>
  );
}

export default Configuration;
