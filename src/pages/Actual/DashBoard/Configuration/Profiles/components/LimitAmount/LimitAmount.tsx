import { Button, InputForm, Typography } from '@/components';

function LimitAmount() {
  return (
    <div className="grid">
      <Typography size="sm" colors="grey">
        Monto límite
      </Typography>
      <InputForm label="Defina una cantidad" name="limmitAmount" type="text" />
      <div className="mt-8 w-72 justify-self-end">
        <Button
          text="Actualizar"
          type="submit"
          height="h-[60px]"
          variant="secondary"
        />
      </div>
    </div>
  );
}

export default LimitAmount;
