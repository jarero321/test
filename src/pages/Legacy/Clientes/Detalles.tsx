import './styles.scss';
import {
  Button,
  Form,
  InputForm,
  Layout,
  ModalLogout,
  SideBarMenu,
  Typography,
} from '@/components';
import React from 'react';

const Client: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    return data;
  };

  return (
    <Layout
      sideBar={<SideBarMenu display titleSideBar="Detalles de la cuenta" />}
    >
      <ModalLogout />
      <div className="w-full h-full flex">
        <div className="w-full">
          <div className="w-full h-full py-[50px] px-[50px]">
            <Typography
              className="head-primary py-[10px]"
              colors=""
              size="base"
            >
              Cuenta
            </Typography>
            <div className="w-full bg-primary-color h-[1px] mt-[20px] opacity-[0.5] " />
            <div className="grid grid-cols-4 gap-4 my-[40px] ">
              <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
                <Typography
                  className="head-primary py-[10px]"
                  colors=""
                  size="sm"
                >
                  Número de cliente :
                </Typography>
                <Typography
                  className="head-primary py-[10px]"
                  colors=""
                  size="sm"
                >
                  Razón social :
                </Typography>
                <Typography
                  className="head-primary py-[10px]"
                  colors=""
                  size="sm"
                >
                  Representante legal :
                </Typography>
                <Typography
                  className="head-primary py-[10px]"
                  colors=""
                  size="sm"
                >
                  RFC :
                </Typography>
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
                <Typography
                  className="head-primary py-[10px] font-bold"
                  colors=""
                  size="sm"
                >
                  2395739
                </Typography>
                <Typography
                  className="head-primary py-[10px] font-bold"
                  colors=""
                  size="sm"
                >
                  Telas Messi SA de CV
                </Typography>
                <Typography
                  className="head-primary py-[10px]"
                  colors=""
                  size="sm"
                >
                  Pep Guardiola{' '}
                </Typography>
                <Typography
                  className="head-primary py-[10px]"
                  colors=""
                  size="sm"
                >
                  SABEE7902128V0
                </Typography>
              </div>
            </div>

            <div className="w-full bg-primary-color h-[1px] mt-[20px] opacity-[0.5] " />
            <div className="grid gap-[60px] grid-cols-3 gap-4 mt-5 w-full">
              <div className="col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1">
                <Typography
                  className="head-primary py-[10px] "
                  colors=""
                  size="sm"
                >
                  Notificaciones
                </Typography>
                <Typography
                  className="head-primary py-[10px]"
                  colors=""
                  size="sm"
                >
                  Correo:
                </Typography>
                <Form onSubmit={onSubmit}>
                  <div className="">
                    <InputForm
                      inputMode="email"
                      name="correo"
                      placeholder="Paquito@gmail.es"
                      type="email"
                    />
                  </div>
                </Form>
              </div>
              <div className="col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1">
                <Typography
                  className="head-primary py-[10px] "
                  colors=""
                  size="sm"
                >
                  Medios para alertas
                </Typography>
                <Typography
                  className="head-primary py-[10px]"
                  colors=""
                  size="sm"
                >
                  Correo:
                </Typography>
                <Form onSubmit={onSubmit}>
                  <div className="">
                    <InputForm
                      inputMode="email"
                      name="correo"
                      placeholder="Paquito@gmail.es"
                      type="email"
                    />
                  </div>
                </Form>
              </div>
              <div className="col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1">
                <Typography
                  className="head-primary py-[10px]"
                  colors=""
                  size="sm"
                >
                  Dirección
                </Typography>
                <Typography
                  className="head-primary py-[10px]"
                  colors=""
                  size="sm"
                >
                  Avenida pase de la Reforma 255 Piso 14 Cuahtémoc, Cuauhtémoc.
                  CDMX, México CP 1601
                </Typography>
              </div>
            </div>
            <div className="w-full gap-[30px] mt-[150px] flex justify-end">
              <Button
                height="h-[60px]"
                text="Consultar estado de cuenta"
                type="button"
                variant="green"
                width="w-[25%]"
              />
              <Button
                height="h-[60px]"
                text="Aceptar"
                type="button"
                variant="default"
                width="w-[25%]"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Client;
