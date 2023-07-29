import { Button, InputForm, Typography } from '@/components';
import { LimitOutModal } from './components/LimitOutModal';
import { useState } from 'react';

const LimitOut = () => {
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <div>
      <Button
        height="h-[60px]"
        onClick={() => setOpenEdit(true)}
        text="Actualizar"
        type="submit"
        variant="secondary"
      />
      <LimitOutModal isOpen={openEdit} onClose={() => setOpenEdit(false)} />
    </div>
  );
};

export default LimitOut;
