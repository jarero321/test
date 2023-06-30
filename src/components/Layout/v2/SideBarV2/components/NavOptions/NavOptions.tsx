import React from 'react';
import { Options } from './components/Options';
import { Home } from '@/components/UI/Icons/Home';
import { useLocation } from 'react-router-dom';
import { SPEI } from '@/components/UI/Icons/SPEI';
import { Services } from '@/components/UI/Icons/Services';
import { Impuestes } from '@/components/UI/Icons/Impuestes';
import { Destinataries } from '@/components/UI/Icons/Destinataries';
import { Reports } from '@/components/UI/Icons/Reports';
import { Configuration } from '@/components/UI/Icons/Configuration';
import { Help } from '@/components/UI/Icons/Help';
import { Close } from '@/components/UI/Icons/Close';

const NavOptions: React.FC = () => {
  const router = useLocation();
  return (
    <div className="w-full h-full py-[20px] flex flex-col gap-[10px] px-[15px] justify-between ">
      <div className="flex flex-col mt-[80px] h-full justify-between">
        <div className="w-[80%] h-full flex flex-col gap-[30px]">
          <Options href="/dashboard/inicio" text="Inicio">
            <Home
              color={
                router.pathname === '/dashboard/inicio' ? '#C2D500' : 'white'
              }
            />
          </Options>
          <Options href="/dashboard/spei" text="Pagos SPEI">
            <SPEI
              color={
                router.pathname === '/dashboard/spei' ? '#C2D500' : 'white'
              }
            />
          </Options>
          <Options href="/dashboard/pago-de-servicios" text="Pago de Servicios">
            <Services
              color={
                router.pathname === '/dashboard/pago-de-servicios'
                  ? '#C2D500'
                  : 'white'
              }
            />
          </Options>
          <Options href="/dashboard/pago-de-impuestos" text="Pago de Impuestos">
            <Impuestes
              color={
                router.pathname === '/dashboard/pago-de-impuestos'
                  ? '#C2D500'
                  : 'white'
              }
            />
          </Options>
          <Options href="/dashboard/destinatarios" text="Destinatarios">
            <Destinataries
              color={
                router.pathname === '/dashboard/destinatarios'
                  ? '#C2D500'
                  : 'white'
              }
            />
          </Options>
          <Options href="/dashboard/reportes" text="Reportes">
            <Reports
              color={
                router.pathname === '/dashboard/reportes' ? '#C2D500' : 'white'
              }
            />
          </Options>
          <Options href="/dashboard/configuracion" text="Configuración">
            <Configuration
              color={
                router.pathname === '/dashboard/configuracion'
                  ? '#C2D500'
                  : 'white'
              }
            />
          </Options>
          <Options href="/dashboard/ayuda" text="Ayuda">
            <Help
              color={
                router.pathname === '/dashboard/ayuda' ? '#C2D500' : 'white'
              }
            />
          </Options>
        </div>
        <div className="h-[20%]">
          <Options href="/dashboard/salir" text="Salir">
            <Close
              color={
                router.pathname === '/dashboard/salir' ? '#C2D500' : 'white'
              }
            />
          </Options>
        </div>
      </div>
    </div>
  );
};

export default NavOptions;
