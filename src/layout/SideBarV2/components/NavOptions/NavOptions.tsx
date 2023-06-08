import React from 'react';
import { Options } from './components/Options';
import Inicio from '../../../../resources/img/iconsV2/ico_inicio-01.svg';
import SPEI from '../../../../resources/img/iconsV2/ico_pagosSPEI-01.svg';
import Services from '../../../../resources/img/iconsV2/ico_pagoservicios-01.svg';
import Impuestos from '../../../../resources/img/iconsV2/ico_pagoimpuestos-01.svg';
import Destinatarios from '../../../../resources/img/iconsV2/ico_destinatarios-01.svg';
import Reportes from '../../../../resources/img/iconsV2/ico_reportes-01.svg';
import Configuracion from '../../../../resources/img/iconsV2/ico_configuracion-01.svg';
import Ayuda from '../../../../resources/img/iconsV2/ico_configuracion-01.svg';
import Salir from '../../../../resources/img/iconsV2/ico_salir-01.svg';

const NavOptions: React.FC = () => {
  return (
    <div className="w-full h-full py-[20px] flex flex-col gap-[10px] px-[15px] justify-between ">
      <div className="flex flex-col gap-[8px]">
        <Options img={Inicio} text="Inicio" />
        <Options img={SPEI} text="Pagos SPEI" />
        <Options img={Services} text="Pago de Servicios" />
        <Options img={Impuestos} text="Pago de Impuestos" />
        <Options img={Destinatarios} text="Destinatarios" />
        <Options img={Reportes} text="Reportes" />
        <Options img={Configuracion} text="Configuración" />
        <Options img={Ayuda} text="Ayuda" />
        <div className="mt-[20px]">
          <Options img={Salir} text="Salir" />
        </div>
      </div>
    </div>
  );
};

export default NavOptions;
