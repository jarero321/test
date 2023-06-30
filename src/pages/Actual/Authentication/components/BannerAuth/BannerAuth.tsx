import './styles.scss';
import { Typography } from '@/components';

const BannerAuth = () => {
  return (
    <div className="banner">
      <Typography
        className="text-left py-[20px] 2xl:!text-[72px] xl:!text-[50px] 2xl:!text-[60px] lg:!text-[42px]"
        colors="text-white"
        size="xl"
      >
        Abre tu cuenta Depósitos y Pagos y ten un manejo de dinero eficiente
      </Typography>
      <Typography
        className="text-left mt-[20px] lg:!text-[20px]"
        colors="text-white text-align-right"
        size="lg"
      >
        Recibe cobros a través del SPEI, efectúa transferencias inmediatas o
        programadas a terceros y paga servicios e impuestos.
      </Typography>
    </div>
  );
};

export default BannerAuth;
