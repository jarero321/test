import { Form, InputForm, Typography } from '@/components';

const SpeiPaymentsForm = () => {
  return (
    <div className="w-full h-full bg-white shadow-lg rounded-[12px] px-[20px] py-[20px]">
      <Form
        className="w-full mt-[20px]"
        onSubmit={(data) => {
          return data;
        }}
      >
        <div className="w-full gap-20 grid grid-cols-1 items-center mb-6">
          <div>
            <div className="font-bold mb-2">
              <Typography size="lg">
                Xpidr SAPI de CV
                <br />
              </Typography>
            </div>
            <div>
              <Typography size="sm" colors="text-fuchsia-700">
                Contrato: 1-COM 2345 <br />
              </Typography>
            </div>
            <div className="flex flex-col-2 gap-6 items-end">
              <Typography size="sm" colors="gray">
                CLABE: 423432432487965789
              </Typography>
              <Typography className="font-bold">$18,346,948.00</Typography>
            </div>
          </div>
        </div>
        <div
          className="border-t border-gray-300"
          style={{ height: 500, width: '100%' }}
        >
          <div className="w-full gap-[20px] grid grid-cols-3 items-center mt-8 mb-6">
            <div>
              <Typography size="sm" colors="grey">
                Notificaciones
              </Typography>
              <InputForm label="correo@dominio.com" name="name" type="email" />
            </div>
            <div>
              <Typography size="sm" colors="grey">
                Notificaciones
              </Typography>
              <InputForm label="correo@dominio.com" name="name" type="email" />
            </div>
            <div>
              <Typography size="sm" colors="grey">
                Notificaciones
              </Typography>
              <InputForm label="correo@dominio.com" name="name" type="email" />
            </div>
          </div>
          <div className="w-full gap-[20px] grid grid-cols-3 items-center mb-1">
            <div>
              <Typography size="sm" colors="grey">
                Notificaciones
              </Typography>
              <InputForm label="correo@dominio.com" name="name" type="email" />
            </div>
            <div>
              <Typography size="sm" colors="grey">
                Notificaciones
              </Typography>
              <InputForm label="correo@dominio.com" name="name" type="email" />
            </div>
            <div>
              <Typography size="sm" colors="grey">
                Notificaciones
              </Typography>
              <InputForm label="correo@dominio.com" name="name" type="email" />
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SpeiPaymentsForm;
