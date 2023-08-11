import { Button } from '@/components';
import React from 'react';

interface ButtonGroupProps {
  buttons: string[];
  selectedButton: string;
  onButtonSelect: (button: string) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttons,
  selectedButton,
  onButtonSelect,
}) => {
  return (
    <div className="flex gap-[20px] whitespace-nowrap">
      {buttons.map((button) => (
        <Button
          className={
            selectedButton === button ? 'primary' : 'bg-gray-500 font-medium'
          }
          height="h-[30px]"
          key={button}
          onClick={() => onButtonSelect(button)}
          text={button}
          type="button"
          width="w-72"
        >
          <>{button}</>
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
