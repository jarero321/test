import { LayoutInterface } from '@/models/components/layout';
import React from 'react';

const Layout: React.FC<LayoutInterface> = ({
  children,
  sideBar,
  width,
  isAContainer = false,
}) => {
  return (
    <main className="w-full min-h-screen flex flex items-center justify-center">
      {sideBar ? (
        <header
          className="hidden lg:block min-h-screen flex"
          style={width ? { width: width } : { width: '320px' }}
        >
          {sideBar}
        </header>
      ) : null}
      {isAContainer ? (
        <section
          className="h-full py-[50px] px-[20px] flex items-center  justify-center"
          style={
            width
              ? { width: `calc(100% - ${width})` }
              : { width: 'calc(100% - 320px)' }
          }
        >
          <div className="w-[98%] h-[98%] rounded-[20px] shadow-xl bg-white">
            {children}
          </div>
        </section>
      ) : (
        <section
          className="h-full flex items-center justify-center bg-primary-gray"
          style={
            width
              ? { width: `calc(100% - ${width})` }
              : { width: 'calc(100% - 320px)' }
          }
        >
          {children}
        </section>
      )}
    </main>
  );
};

export default Layout;
