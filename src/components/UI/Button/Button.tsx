import { Loader } from '../Loader';
import { motion } from 'framer-motion';
import React from 'react';
import getVariant from './Button.styles';

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
  return (
    <motion.button
      className={`${getVariant(variant)} ${className ?? ''} ${
        height ? `max-h-[${height}]` : 'max-h-[50px]'
      } ${height ?? 'h-[50px]'} ${width ?? 'w-full'} `}
      disabled={loader}
      form={id ?? ''}
      onClick={() => (onClick ? onClick() : () => null)}
      type={type}
      whileHover={{ scale: 1.05 }}
    >
      {loader ? (
        <div className="w-full h-full flex items-center text-lg justify-center">
          <Loader />
        </div>
      ) : (
        <> {text} </>
      )}
    </motion.button>
  );
};

export default Button;
