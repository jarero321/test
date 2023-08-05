import { Form, Typography } from '@/components';

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
      </Form>
    </div>
  );
};

export default ReportsForm;
