import { SpeiPaymentsHeader } from './containers/SpeiPaymentHeader';
import { SpeiPaymentsForm } from './containers/SpeiPaymentsForm';

const SpeiPayments = () => {
  return (
    <div className="px-[40px]">
      <div>
        <SpeiPaymentsHeader />
      </div>
      <div className="mt-[20px]">
        <SpeiPaymentsForm />
      </div>
    </div>
  );
};

export default SpeiPayments;
