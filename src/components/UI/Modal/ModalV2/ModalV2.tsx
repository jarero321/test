import React from 'react';

export type ModalV2Props = {
  children?: React.ReactNode;
  active?: boolean;
};

const ModalV2: React.FC<ModalV2Props> = ({ children, active }) => {
  if (active) {
    return (
      <section className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.3)] z-10 flex items-center justify-center">
        <div className="px-[32px] py-[32px] bg-white rounded-[12px]">
          {children}
        </div>
      </section>
    );
  }
  return <></>;
};

export default ModalV2;
