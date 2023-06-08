import React from 'react';

export interface MessageErrorInterface {
  message: string;
}

const MessageError: React.FC<MessageErrorInterface> = ({ message }) => {
  return (
    <div>
      <span className="absolute text-red-500 text-xs pt-[2px] px-[4px]">
        {message}
      </span>
    </div>
  );
};

export default MessageError;
