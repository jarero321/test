import React from 'react';

export interface MessageErrorInterface {
  message: string;
}

const MessageError: React.FC<MessageErrorInterface> = ({ message }) => {
  return (
    <div>
      <span className=" text-red-500 relative text-xs pt-[2px] px-[4px]">
        {message}
      </span>
    </div>
  );
};

export default MessageError;
