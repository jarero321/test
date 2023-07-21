import { useState } from 'react';
import { Button, InputForm, Typography } from '@/components';
import UpdateAmountModal from '../UpdateAmountModal/UpdateAmountModal';

function LimitAmount() {
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <div className="grid">
      <Typography size="sm" colors="grey">
        Monto límite
      </Typography>
      <InputForm label="Defina una cantidad" name="limmitAmount" type="text" />
      <div className="mt-8 w-72 justify-self-end">
        <Button
          text="Actualizar"
          height="h-[60px]"
          onClick={() => setOpenEdit(true)}
          type="submit"
          variant="secondary"
        />
      </div>
      <UpdateAmountModal isOpen={openEdit} onClose={() => setOpenEdit(false)} />
    </div>
  );
}

export default LimitAmount;
