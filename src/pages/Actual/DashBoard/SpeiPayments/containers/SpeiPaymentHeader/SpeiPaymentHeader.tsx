import { useState } from 'react';
import { Button, SelectForm, Typography } from '@/components';
import { ButtonGroup } from './components/ButtonGroup';

const SpeiPaymentsHeader = () => {
  const [selectedButton, setSelectedButton] = useState('Button 1');

  const handleButtonSelect = (button: string) => {
    setSelectedButton(button);
  };
  return (
    <>
      <div className="w-full flex justify-between items-center my-[20px]">
        <Typography className="font-semibold" size="lg">
          Pagos SPEI
        </Typography>
        <div className="flex gap-[20px]">
          <SelectForm
            options={[]}
            name="changeAccount"
            placeholder="cambio de cuenta"
          />
        </div>
      </div>
      <ButtonGroup
        buttons={['Pago único', 'Dispersión de pagos']}
        selectedButton={selectedButton}
        onButtonSelect={handleButtonSelect}
      />
    </>
  );
};

export default SpeiPaymentsHeader;
