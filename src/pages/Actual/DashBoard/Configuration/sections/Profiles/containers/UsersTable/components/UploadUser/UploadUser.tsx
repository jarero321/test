import { Header } from '@/pages/Actual/DashBoard/Configuration/components/Header';
import { UploadUserForm } from './sections/UploadUserForm';

const UploadUser: React.FC = () => {
  return (
    <div className="px-[40px]">
      <Header />
      <UploadUserForm />
    </div>
  );
};

export default UploadUser;
