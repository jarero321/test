import { Loader } from '../Loader';
import { TypeWithKey } from '@/models/type-with-key';
import React from 'react';

export interface ButtonInterface {
  text: string;
  type: 'submit' | 'button';
  onClick?(): void;
  width?: string;
  height?: string;
  loader?: boolean;
  variant?: string;
  className?: string;
  id?: string;
  children?: JSX.Element;
}

const Button: React.FC<ButtonInterface> = ({
  text,
  type,
  onClick,
  width,
  height,
  loader,
  variant = 'primary',
  className,
  id,
}) => {
  const getVariant = (variant: string): string => {
    const options: TypeWithKey<string> = {
      primary:
        'w-full xl:text-[13px] bg-primary-color text-white font-semibold rounded-[6px]',
      secondary:
        'w-full xl:text-[13px] bg-secondary text-primary-color font-semibold rounded-[6px]',
      grey: 'w-full xl:text-[13px] !text-white bg-[#6B7280] hover:bg-gray-400 font-bold py-2 px-4 rounded flex justify-center items-center',
      default:
        'w-full xl:text-[13px]  flex items-center justify-center rounded-[6px] bg-primary-color px-6 pt-2.5 pb-2 font-semibold text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg',
      green:
        'w-full xl:text-[13px]  flex items-center justify-center rounded-[6px] bg-secondary px-6 pt-2.5 pb-2 font-semibold text-primary-color shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg',
      link: 'w-full xl:text-[13px]  inline-block rounded-[6px] text-primary-color transition duration-150 ease-in-out  focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700',
    };

    return options[variant] || options.primary;
  };
  return (
    <button
      className={`max-h-[40px] ${getVariant(variant)}  ${width ?? ''} ${
        height ?? 'h-[40px]'
      } ${className ?? ''} `}
      disabled={loader}
      form={id ?? ''}
      onClick={() => (onClick ? onClick() : () => null)}
      type={type}
    >
      {loader ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <> {text} </>
      )}
    </button>
  );
};

export default Button;
