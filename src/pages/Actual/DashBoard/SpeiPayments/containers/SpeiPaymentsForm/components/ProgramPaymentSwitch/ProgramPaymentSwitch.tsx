import { InputForm, Typography } from '@/components';
import { useState, ChangeEvent } from 'react';
const ProgramPaymentSwitch = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');

  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsSwitchOn(event.target.checked);
  };

  const handleInput1Change = (event: ChangeEvent<HTMLInputElement>) => {
    setInput1Value(event.target.value);
  };

  const handleInput2Change = (event: ChangeEvent<HTMLInputElement>) => {
    setInput2Value(event.target.value);
  };
  return (
    <div>
      <div className="flex justify-end mt-4">
        <div className="mr-4">Programar pago</div>
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isSwitchOn}
              onChange={handleSwitchChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      {isSwitchOn && (
        <>
          <div className="w-full gap-[20px] grid grid-cols-1 items-center mb-4 mt-4">
            <div className="font-bold">
              <Typography size="lg">Pago programado</Typography>
            </div>
          </div>
          <div className="w-full gap-[20px] grid grid-cols-3 items-center mt-2 justify-end">
            <div>
              <Typography colors="secondary-gray" size="xs">
                Nombre (s)
              </Typography>
              <InputForm label="" name="name" placeholder="Luis Miguel" />
            </div>
            <div>
              <Typography colors="secondary-gray" size="xs">
                Primer apellido
              </Typography>
              <InputForm label="" name="lastName" placeholder="Saaavedra" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProgramPaymentSwitch;
