import { useState } from 'react';
import { ButtonGroup } from './components/ButtonGroup';
import { HelpHeader } from './containers/HelpHeader';
import { HelpInfo } from './containers/HelpInfo';
import HelpFaq from './containers/HelpFaq/HelpFaq';

const Help = () => {
  const [selectedButton, setSelectedButton] = useState('Button 1');

  const handleButtonSelect = (button: string) => {
    setSelectedButton(button);
  };
  return (
    <div className="px-[40px]">
      <HelpHeader />
      <ButtonGroup
        buttons={[
          'Preguntas Frecuentes',
          '2FA Doble Factor de Autenticación',
          '¿Cómo podemos ayudarte?',
        ]}
        selectedButton={selectedButton}
        onButtonSelect={handleButtonSelect}
      />
      <div className="mt-[20px]">
        {selectedButton === 'Preguntas Frecuentes' && <HelpFaq />}
        {selectedButton === '¿Cómo podemos ayudarte?' && <HelpInfo />}
      </div>
    </div>
  );
};

export default Help;
