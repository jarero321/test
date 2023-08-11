import { useState } from 'react';
import { Button, Form, InputForm, Typography } from '@/components';
import { ProgramPaymentSwitch } from './components/ProgramPaymentSwitch';
import { ProgramPaymentModal } from './components/ProgramPaymentModal';

const SpeiPaymentsForm = () => {
  const [openEdit, setOpenProgramPaymentModal] = useState(false);
  const [openConfirm, setOpenConfirmPaymentModal] = useState(false);

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <div className="w-full h-full bg-white shadow-lg rounded-[12px] px-[20px] py-[60px]">
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
                Xpidr SAPI de CV
                <br />
              </Typography>
            </div>
            <div>
              <Typography size="sm" colors="text-fuchsia-700">
                Contrato: 1-COM 2345 <br />
              </Typography>
            </div>
            <div className="flex flex-col-2 gap-6 items-end">
              <Typography size="sm" colors="gray">
                CLABE: 423432432487965789
              </Typography>
              <Typography className="font-bold">$18,346,948.00</Typography>
            </div>
          </div>
        </div>
        <div
          className="border-t border-gray-300"
          style={{ height: 500, width: '100%' }}
        >
          <div className="w-full gap-[20px] grid grid-cols-3 items-center mt-8 mb-6">
            <div>
              <Typography size="xs" colors="secondary-gray">
                Destinatario
              </Typography>
              <InputForm name="receiver" type="text" />
            </div>
            <div>
              <Typography size="xs" colors="secondary-gray">
                Cuenta
              </Typography>
              <InputForm name="account" type="text" />
            </div>
            <div>
              <Typography size="xs" colors="secondary-gray">
                Institución
              </Typography>
              <InputForm name="institution" type="text" />
            </div>
          </div>
          <div className="w-full gap-[20px] grid grid-cols-3 items-center mb-1">
            <div>
              <Typography size="xs" colors="secondary-gray">
                Monto a retirar
              </Typography>
              <InputForm label="$" name="amount" type="text" />
            </div>
            <div>
              <Typography size="xs" colors="secondary-gray">
                Concepto
              </Typography>
              <InputForm name="concept" type="text" />
            </div>
            <div>
              <Typography size="xs" colors="secondary-gray">
                Referencia numérica
              </Typography>
              <InputForm name="referenceNumber" type="text" />
            </div>
          </div>
          <div className="">
            <ProgramPaymentSwitch
              isSwitchOn={isSwitchOn}
              handleSwitchChange={handleSwitchChange}
            />
          </div>
          {/* Show inputs for program payment when switch its on */}
          {isSwitchOn && (
            <>
              <div className="w-full gap-[20px] grid grid-cols-1 items-center mb-4 mt-4">
                <div className="font-bold">
                  <Typography size="lg">Pago programado</Typography>
                </div>
              </div>
              <div className="w-full gap-[20px] grid grid-cols-3 items-center mt-2 justify-end">
                <div className="relative">
                  <Typography colors="secondary-gray" size="xs">
                    Fecha de pago
                  </Typography>
                  <InputForm
                    type="calendar"
                    label=""
                    name="paymentDate"
                    placeholder="Define una fecha"
                  />
                </div>
                <div>
                  <Typography colors="secondary-gray" size="xs">
                    Hora de Pago
                  </Typography>
                  <InputForm
                    type="clock"
                    name="paymentHour"
                    placeholder="Selecciona una opción"
                  />
                </div>
              </div>
            </>
          )}
          <div className="w-full flex justify-end mt-[40px] ">
            <div className="w-[40%] flex gap-[50px] ">
              <Button
                height="h-[60px]"
                text="Cancelar"
                type="submit"
                variant="grey"
              />
              <Button
                height="h-[60px]"
                onClick={() => setOpenProgramPaymentModal(true)}
                text="Continuar"
                type="submit"
                variant="secondary"
              />
            </div>
          </div>
          <ProgramPaymentModal
            isOpen={openEdit}
            switchOn={isSwitchOn}
            onClose={() => setOpenProgramPaymentModal(false)}
          />
        </div>
      </Form>
    </div>
  );
};

export default SpeiPaymentsForm;
