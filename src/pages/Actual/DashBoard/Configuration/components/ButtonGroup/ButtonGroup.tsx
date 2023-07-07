import { Button, Typography } from '@/components';
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
    <div className="flex gap-[20px]">
      {buttons.map((button) => (
        <Button
          width="w-[150px]"
          height="h-[30px]"
          type="button"
          text={button}
          key={button}
          onClick={() => onButtonSelect(button)}
          className={
            selectedButton === button ? 'primary' : 'bg-gray-500 font-medium'
          }
        >
          {button}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
