import React from 'react';

export type SPEIProps = {
  color: string;
};

const SPEI: React.FC<SPEIProps> = ({ color }) => {
  return (
    <svg
      fill={color}
      height="34"
      viewBox="0 0 34 34"
      width="34"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.6 8.8C30.4 8.8 30.2 8.6 30.2 8.4C30.2 7 28.7 6.8 28.1 6.8H5.9C5.2 6.9 3.8 7 3.8 8.4C3.8 8.6 3.6 8.8 3.4 8.8C3.2 8.8 3 8.6 3 8.4C3 7 4.1 6.1 5.9 6.1H28.2C29.9 6.1 31 7 31 8.4C31 8.6 30.8 8.8 30.6 8.8Z"
        fill={color}
      />
      <path
        d="M29.8 27.9H4.2C2.4 27.9 1 26.5 1 24.7V11.3C1 9.5 2.4 8.1 4.2 8.1H29.9C31.7 8.1 33.1 9.5 33.1 11.3V24.7C33 26.4 31.6 27.9 29.8 27.9ZM4.2 8.8C2.8 8.8 1.7 9.9 1.7 11.3V24.7C1.7 26.1 2.8 27.2 4.2 27.2H29.9C31.3 27.2 32.4 26.1 32.4 24.7V11.3C32.4 9.9 31.3 8.8 29.9 8.8H4.2Z"
        fill={color}
      />
      <path
        d="M17 24.5C13.4 24.5 10.5 21.6 10.5 18C10.5 14.4 13.4 11.5 17 11.5C20.6 11.5 23.5 14.4 23.5 18C23.5 21.6 20.6 24.5 17 24.5ZM17 12.2C13.8 12.2 11.2 14.8 11.2 18C11.2 21.2 13.8 23.8 17 23.8C20.2 23.8 22.8 21.2 22.8 18C22.8 14.8 20.2 12.2 17 12.2Z"
        fill={color}
      />
      <path
        d="M15.9 20C16.1 20.2 16.4 20.4 16.8 20.4V18.1C16.5 18 16.2 17.9 16 17.8C15.8 17.7 15.6 17.6 15.4 17.5C15.3 17.4 15.1 17.2 15.1 17C15 16.9 15 16.7 15 16.5C15 16.2 15 16 15.1 15.8C15.2 15.6 15.3 15.4 15.5 15.2C15.7 15 15.9 14.9 16.1 14.8C16.3 14.7 16.6 14.7 16.8 14.6V14H17.3V14.6C17.8 14.7 18.2 14.8 18.4 15.1C18.7 15.4 18.9 15.8 19 16.3H18.3C18.2 15.7 17.9 15.4 17.3 15.3V17.5L17.8 17.6C17.9 17.6 18.1 17.7 18.2 17.8C18.4 17.9 18.5 18 18.7 18.1C18.8 18.2 19 18.4 19.1 18.6C19.2 18.8 19.3 19 19.3 19.3C19.3 19.6 19.3 19.8 19.2 20.1C19.1 20.3 19 20.5 18.8 20.7C18.6 20.9 18.4 21 18.2 21.1C18 21.2 17.7 21.3 17.4 21.3V22H16.9V21.3C16.3 21.2 15.8 21 15.5 20.7C15.2 20.4 15 19.9 14.9 19.3H15.6C15.5 19.5 15.7 19.8 15.9 20ZM16.1 15.6C15.9 15.8 15.8 16 15.8 16.4C15.8 16.6 15.8 16.7 15.9 16.8C15.9 16.9 16 17 16.1 17.1C16.2 17.2 16.3 17.2 16.4 17.3C16.5 17.4 16.7 17.4 16.8 17.4V15.3C16.5 15.3 16.3 15.4 16.1 15.6ZM17.7 20.4C17.8 20.4 18 20.3 18.1 20.2C18.2 20.1 18.3 20 18.3 19.9C18.4 19.8 18.4 19.6 18.4 19.4C18.4 19.2 18.4 19.1 18.3 19C18.2 18.9 18.2 18.8 18.1 18.7C18 18.6 17.9 18.5 17.7 18.5C17.6 18.4 17.4 18.4 17.3 18.3V20.5C17.4 20.5 17.6 20.4 17.7 20.4Z"
        fill={color}
      />
    </svg>
  );
};

export default SPEI;