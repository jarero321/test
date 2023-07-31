import { Typography } from '@/components';

const BannerAuth = () => {
  return (
    <div className="w-full max-h-screen h-screen flex flex-col items-center justify-center px-[128px] 2xl:px-[180px] bg-primary-color">
      <Typography className="text-5xl" colors="text-white">
        Abre tu cuenta Depósitos y Pagos y ten un manejo de dinero eficiente
      </Typography>
      <Typography
        className="text-left mt-[20px] lg:!text-[20px]"
        colors="text-white xl:!text-[18px] text-align-right"
        size="xs"
      >
        Recibe cobros a través del SPEI, efectúa transferencias inmediatas o
        programadas a terceros y paga servicios e impuestos.
      </Typography>
    </div>
  );
};

export default BannerAuth;
