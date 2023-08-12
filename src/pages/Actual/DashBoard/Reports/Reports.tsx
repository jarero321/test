import { ReportsForm } from './containers/ReportsForm';
import { ReportsHeader } from './containers/ReportsHeader';

const Reports = () => {
  return (
    <div className="px-[40px]">
      <div>
        <ReportsHeader />
      </div>
      <div className="mt-[20px]">
        <ReportsForm />
      </div>
    </div>
  );
};

export default Reports;
