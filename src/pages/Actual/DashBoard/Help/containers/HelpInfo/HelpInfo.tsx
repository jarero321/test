import { InputForm, Typography } from '@/components';
import { IconButton } from '@/components/UI/IconButton';
import MailIcon from '@/resources/icons/MailIcon';
import TelAtentionIcon from '@/resources/icons/TelAtentionIcon';

const HelpInfo = () => {
  return (
    <div className="w-full h-full bg-white shadow-lg rounded-[12px] px-[20px] py-[20px]">
      <div className="w-full gap-20 grid grid-cols-1 items-center mb-6">
        <div>
          <div className="font-bold mb-2">
            <Typography size="lg">
              Centro de Atención a Clientes
              <br />
            </Typography>
          </div>
          <div>
            <Typography size="sm" colors="secondary-gray">
              Si necesitas más información o requieres ayuda por favor
              contáctanos: <br />
            </Typography>
          </div>
        </div>
      </div>
      <div className="w-full gap-20 grid grid-cols-2 items-center mb-6">
        <div>
          <Typography size="xs" colors="secondary-gray">
            Atención telefónica
          </Typography>
          <div className="flex gap-4">
            <TelAtentionIcon className="h-16 w-16" />
            <div className="w-full">
              <InputForm
                name="receiver"
                type="text"
                placeholder="800 110 90 90"
              />
            </div>
          </div>
        </div>
        <div>
          <Typography size="xs" colors="secondary-gray">
            O escribe a:
          </Typography>
          <div className="flex gap-4">
            <MailIcon className="h-16 w-16" />
            <div className="w-full">
              <InputForm
                name="receiver"
                type="text"
                placeholder="clientes@depositosypagos.com"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full gap-20 grid grid-cols-2 items-center mb-6">
        <div>
          <Typography size="xs" colors="secondary-gray">
            En horario de atención: <br />
            Lunes a viernes de 08:00 am a 08:00 pm. <br />
            Sábados de 08:00 am a 03:00 pm.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default HelpInfo;
