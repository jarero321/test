import { InputForm, Typography } from '@/components';
import { useState, ChangeEvent } from 'react';

interface ProgramPaymentSwitchProps {
  isSwitchOn: boolean;
  handleSwitchChange: () => void;
}

const ProgramPaymentSwitch: React.FC<ProgramPaymentSwitchProps> = ({
  isSwitchOn,
  handleSwitchChange,
}) => {
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');

  return (
    <div>
      <div className="flex justify-end mt-4">
        <Typography colors="secondary-gray" size="xs" className="mr-4">
          Programar pago
        </Typography>
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isSwitchOn}
              onChange={handleSwitchChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:bg-secondary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProgramPaymentSwitch;
