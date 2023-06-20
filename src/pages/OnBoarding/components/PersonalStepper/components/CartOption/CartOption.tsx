import React from 'react';

export interface CartOptionProps {
  children: React.ReactNode;
}

const CartOption: React.FC<CartOptionProps> = ({ children }) => {
  return (
    <div className="w-full min-h-[200px] hover:bg-secondary border border-[2px] cursor-pointer shadow-lg bg-white rounded-[10px] flex items-center justify-center">
      {children}
    </div>
  );
};

export default CartOption;
