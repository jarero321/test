import { Typography } from '@/components';

const BannerAuth = () => {
  return (
    <div className="w-full max-h-screen h-screen flex flex-col items-center justify-center px-[128px] 2xl:px-[180px] gap-[40px] bg-primary-color">
      <Typography colors="text-white" size="text-6xl 2xl:text-7xl">
        Abre tu cuenta Depósitos y Pagos y ten un manejo de dinero eficiente
      </Typography>
      <Typography
        colors="text-white text-align-right"
        size="text-xl 2xl:text-2xl"
      >
        Recibe cobros a través del SPEI, efectúa transferencias inmediatas o
        programadas a terceros y paga servicios e impuestos.
      </Typography>
    </div>
  );
};

export default BannerAuth;
