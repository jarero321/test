import React from 'react';

export type ConfigurationProps = {
  color: string;
};

const Configuration: React.FC<ConfigurationProps> = ({ color }) => {
  return (
    <svg
      fill={color}
      height="34"
      viewBox="0 0 34 34"
      width="34"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.8 29.7C8.6 29.7 8.5 29.7 8.3 29.7C8.2 29.7 8 29.6 8 29.4C8 29.3 8 29.1 8.1 29L9.8 27.3V27.2V25.7V25.6L8.3 24.1H8.2H6.7H6.6L4.9 25.8C4.8 26 4.7 26 4.5 26C4.4 26 4.3 25.8 4.2 25.7C4.2 25.5 4.2 25.4 4.2 25.2C4.2 23.7 4.9 22.4 6.1 21.5C7.3 20.6 8.8 20.4 10.2 20.9C10.3 20.9 10.3 20.9 10.3 20.9C10.3 20.9 12.9 18.3 15.5 15.7C20.7 10.5 20.7 10.5 20.7 10.5V10.4C20.2 9 20.5 7.5 21.3 6.3C22.3 4.9 23.9 4.2 25.5 4.4C25.6 4.4 25.8 4.5 25.8 4.6C25.8 4.7 25.8 4.9 25.7 5L24.1 6.7V6.8V8.3V8.4L25.5 9.9H25.6H27.1H27.2L28.9 8.2C29.2 8 29.3 8 29.5 8C29.6 8 29.7 8.2 29.8 8.3C29.8 8.5 29.8 8.6 29.8 8.8C29.8 11.3 27.7 13.4 25.2 13.4C24.7 13.4 24.2 13.3 23.7 13.2C23.6 13.2 23.6 13.2 23.6 13.2L13.2 23.6C13.2 23.6 13.1 23.7 13.2 23.7C13.7 25.1 13.4 26.6 12.6 27.8C11.7 29.1 10.3 29.7 8.8 29.7ZM6.7 23.4H8.2C8.4 23.4 8.7 23.5 8.8 23.7L10.3 25.2C10.5 25.4 10.6 25.6 10.6 25.8V27.3C10.6 27.5 10.5 27.8 10.3 27.9L9.3 28.9C10.4 28.8 11.3 28.2 11.9 27.3C12.6 26.3 12.8 25 12.4 23.9C12.3 23.6 12.4 23.2 12.6 23L23 12.7C23.2 12.5 23.6 12.4 23.9 12.5C24.3 12.6 24.7 12.7 25.1 12.7C27 12.7 28.7 11.2 28.9 9.4L27.9 10.4C27.7 10.6 27.5 10.7 27.3 10.7H25.8C25.6 10.7 25.3 10.6 25.1 10.4L23.7 8.9C23.5 8.7 23.4 8.5 23.4 8.3V6.7C23.4 6.5 23.5 6.2 23.7 6.1L24.7 5.1C23.6 5.2 22.7 5.8 22 6.7C21.3 7.7 21.1 9 21.5 10.1C21.6 10.4 21.5 10.8 21.3 11C21.3 11 18.7 13.6 16.1 16.2C13.5 18.8 10.9 21.4 10.9 21.4C10.7 21.6 10.3 21.7 10 21.6C8.8 21.2 7.6 21.4 6.6 22.1C5.7 22.7 5.2 23.7 5 24.7L6 23.7C6.2 23.5 6.4 23.4 6.7 23.4Z"
        fill={color}
      />
    </svg>
  );
};

export default Configuration;