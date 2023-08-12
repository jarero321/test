import { useState } from 'react';
import { Button, Typography } from '@/components';
import { ButtonGroup } from './components/ButtonGroup';
const ReportsHeader = () => {
  const [selectedButton, setSelectedButton] = useState('Button 1');

  const handleButtonSelect = (button: string) => {
    setSelectedButton(button);
  };
  return (
    <>
      <div className="w-full flex justify-between items-center my-[20px]">
        <Typography className="font-semibold" size="lg">
          Reportes
        </Typography>
        <div className="flex gap-[20px]">
          <Button text="Regresar" type="button" width="!w-[100px]" />
        </div>
      </div>
      <ButtonGroup
        buttons={[
          'Movimientos',
          'Pagos programados',
          'Documentación',
          'CEPs',
          'Cargos no reconocidos',
        ]}
        selectedButton={selectedButton}
        onButtonSelect={handleButtonSelect}
      />
    </>
  );
};

export default ReportsHeader;
