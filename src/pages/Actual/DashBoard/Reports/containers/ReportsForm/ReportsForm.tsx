import { Form, SelectForm, Typography } from '@/components';

const ReportsForm = () => {
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
                Estados de cuenta
                <br />
              </Typography>
            </div>
          </div>
        </div>
        <div className="w-full gap-20 grid grid-cols-3 items-center mb-6">
          <div>
            <Typography size="xs" colors="secondary-gray">
              Elige un periodo
            </Typography>
            <SelectForm name="month" options={[]} placeholder="Mes - año" />
          </div>
        </div>
        <div className="w-full gap-20 grid grid-cols-1 items-center mb-6">
          <div>
            <Typography size="xs" colors="secondary-gray">
              En caso de requerir un estado de cuenta anterior, puedes
              solicitarlo comunicándote a nuestro Centro de Atención a Clientes
              DyP sin costo al 8001 10 90 90 en horario de atención de lunes a
              viernes de 8 am a 8 pm o escribe a clientes@depositosypagos.com
            </Typography>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ReportsForm;
