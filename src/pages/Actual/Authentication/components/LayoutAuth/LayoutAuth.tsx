import Logo from '@/resources/img/logo/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

export type LayoutAuthProps = {
  children: JSX.Element;
  bannerAuth: JSX.Element;
};

const LayoutAuth: React.FC<LayoutAuthProps> = ({ children, bannerAuth }) => {
  return (
    <main className="w-full max-w-screen h-full flex">
      <div className="w-full h-full px-[44px] py-[44px]">
        <header className="w-[148px] h-[55px]">
          <Link className="w-full" to="/">
            <img alt="logo paycode" className="w-[148px] h-[55px]" src={Logo} />
          </Link>
        </header>
        <section
          className="w-full flex items-center justify-center"
          style={{ height: 'calc(100vh - 150px)' }}
        >
          {children}
        </section>
      </div>
      <article className="w-full h-full">{bannerAuth}</article>
    </main>
  );
};

export default LayoutAuth;
