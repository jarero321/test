import { EditAddressForm } from '@/pages/Actual/DashBoard/Configuration/MyAccount/EditAddress/components';
import { Header } from '@/pages/Actual/DashBoard/Configuration/components/Header';
import { UploadUserForm } from './pages/UploadUserForm';

const UploadUser: React.FC = () => {
  return (
    <div className="px-[40px]">
      <Header />
      <UploadUserForm />
    </div>
  );
};

export default UploadUser;
