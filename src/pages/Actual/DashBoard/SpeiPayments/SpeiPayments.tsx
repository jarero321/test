import { SpeiPaymentsHeader } from './containers/SpeiPaymentHeader';
import { SpeiPaymentsForm } from './containers/SpeiPaymentsForm';

const SpeiPayments = () => {
  return (
    <div className="px-[40px]">
      <SpeiPaymentsHeader />
      <SpeiPaymentsForm />
    </div>
  );
};

export default SpeiPayments;
