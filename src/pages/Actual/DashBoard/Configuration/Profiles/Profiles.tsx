import { Typography, Form } from '@/components';
import { LimitAmount } from './containers/LimitAmount';
import { UsersTable } from './containers/UsersTable';

const Profiles = () => {
  return (
    <div className="mt-5 w-full h-full bg-white shadow-lg rounded-[12px] px-[20px] py-[20px]">
      <Form
        className="w-full mt-[20px]"
        onSubmit={(data) => {
          return data;
        }}
      >
        <div className="w-full gap-[20px] grid grid-cols-1 items-center mb-6">
          <div style={{ marginTop: '-33px' }}>
            <div className="font-bold">
              <Typography size="lg">
                Perfiles <br />
              </Typography>
            </div>
            <div className="mt-10">
              <Typography size="xs" colors="gray">
                Establece el monto límite para las operaciones del Rol de
                Tesorero
              </Typography>
            </div>
          </div>
        </div>
        <div className="w-full gap-[20px] grid grid-cols-3 items-center mb-1">
          <LimitAmount />
        </div>
        <div className="mt-6">
          <UsersTable />
        </div>
      </Form>
    </div>
  );
};

export default Profiles;
