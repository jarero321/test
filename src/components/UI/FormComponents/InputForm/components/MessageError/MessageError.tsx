import { Typography } from '@/components/UI/Texts/Typography';
import React from 'react';

export interface MessageErrorInterface {
  message: string;
}

const MessageError: React.FC<MessageErrorInterface> = ({ message }) => {
  return (
    <div>
      <Typography className="text-red-500 text-xs relative pt-[2px] px-[4px]">
        {message}
      </Typography>
    </div>
  );
};

export default MessageError;
