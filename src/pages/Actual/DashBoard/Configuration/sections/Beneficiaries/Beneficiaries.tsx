import { Button } from '@/components';
import { useNavigate } from 'react-router-dom';
import { TableBeneficiaries } from './containers/TableBeneficiaries';

function Beneficiaries() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-end items-end my-[20px]">
        <div className="flex gap-[20px]">
          <Button
            onClick={() => navigate('/dashboard/alta-nuevo-beneficiario')}
            text="Agregar Nuevo Beneficiario +"
            type="button"
            variant="secondary"
            width="w-[250px]"
          />
        </div>
      </div>
      <div>
        <TableBeneficiaries />
      </div>
    </>
  );
}

export default Beneficiaries;
