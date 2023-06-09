import './styles.scss';
import { Button, Layout, SideBarMenu, Typography } from '@/components';
import React from 'react';

const Welcome: React.FC = () => {
  return (
    <Layout sideBar={<SideBarMenu display titleSideBar="Bienvenido" />}>
      {/* Cards */}
      <div className="w-full h-full flex">
        <div className="w-full">
          <div className="w-full h-full py-[50px] px-[50px]">
            <Typography className="font-semibold" size="base">
              Bienvenido a tu portal
            </Typography>
            <div className="w-full bg-primary-color h-[1px] mt-[20px] opacity-[0.5]" />
            <div className="flex gap-4 my-2 mt-[30px]">
              <div className="col-span-5 sm:col-span-5 md:col-span-2 lg:col-span-2 xl:col-span-2 divider">
                <Typography
                  className="head-primary py-[10px]"
                  colors=""
                  size="lg"
                >
                  Selecciona la aplicación
                </Typography>
                <Typography
                  className="mt-[20px] mb-[20px]"
                  colors="secondary-gray"
                  size="xs"
                >
                  Haz click en el servicio deseado{' '}
                </Typography>
                <div className="container mx-auto grid grid-cols-2 gap-4 pr-3">
                  <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col bg-white border-2 p-4 rounded-lg hover:bg-secondary dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer">
                    <div className="flex-auto p-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <Typography className="pb-[5px]" colors="" size="lg">
                            Plataforma de fondos de pagos electrónicos
                          </Typography>
                          <Typography
                            className="pb-[5px]"
                            colors="secondary-gray"
                            size="xs"
                          >
                            Cuenta digital empresarial
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col bg-white border-2 p-4 rounded-lg hover:bg-secondary dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer">
                    <div className="flex-auto p-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <Typography className="pb-[5px]" colors="" size="lg">
                            Administración{' '}
                          </Typography>
                          <Typography
                            className="pb-[5px]"
                            colors="secondary-gray"
                            size="xs"
                          >
                            Plataforma de administración
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-5 sm:col-span-5 md:col-span-3 lg:col-span-3 xl:col-span-3">
                <Typography
                  className="head-primary py-[10px] mb-11"
                  colors=""
                  size="lg"
                >
                  Detalles de la cuenta
                </Typography>
                <div className="col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4">
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 striped">
                        <tr>
                          <th className="px-6 py-3" scope="col">
                            Cliente
                          </th>
                          <td className="px-6 py-4">
                            Capital y Liderazgo Humano SA de CV
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <th className="px-6 py-4 font-medium" scope="row">
                            Cuenta
                          </th>
                          <td className="px-6 py-4">DyP 6531800003810001039</td>
                        </tr>
                        <tr className="border-b striped">
                          <th className="px-6 py-4 font-medium" scope="row">
                            RFC
                          </th>
                          <td className="px-6 py-4">UF1704069B4</td>
                        </tr>
                        <tr className="bg-white border-b striped">
                          <th className="px-6 py-4 font-medium" scope="row">
                            Fecha Alta
                          </th>
                          <td className="px-6 py-4">2017-04-09 09:37:18</td>
                        </tr>
                        <tr className="border-b striped">
                          <th className="px-6 py-4 font-medium" scope="row">
                            Estado
                          </th>
                          <td className="px-6 py-4">Activo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="grid grid-flow-row auto-rows-max">
                    <Typography
                      className="head-primary py-[10px] mt-8"
                      colors=""
                      size="lg"
                    >
                      Administración de la cuenta
                    </Typography>
                    <span className="text">
                      Al ser el administrador de la cuenta, puedes modificar las
                      pertenencias operativas así como administrar los usuarios
                      de esta cuenta.
                    </span>
                    <div className="mt-[20px] w-[50%]">
                      <Button
                        height="h-[50px]"
                        text="Administración de la cuenta"
                        type="submit"
                        variant="default"
                      />
                    </div>
                    <Typography
                      className="head-primary py-[10px] mt-8"
                      colors=""
                      size="lg"
                    >
                      Recuperación de códigos de acceso
                    </Typography>
                    <span className="text">
                      Si no tienes tus códigos de acceso, solicitalo aquí.
                    </span>
                    <div className="mt-[20px] w-[50%]">
                      <Button
                        height="h-[50px]"
                        text="Recuperar códigos de acceso"
                        type="submit"
                        variant="default"
                      />
                    </div>
                    <Typography
                      className="head-primary py-[10px] mt-8"
                      colors=""
                      size="lg"
                    >
                      Cambiar contraseña
                    </Typography>
                    <span className="text">
                      Cambia tu contraseña frecuentemente
                    </span>
                    <div className="mt-[20px] w-[50%]">
                      <Button
                        height="h-[50px]"
                        text="Cambio de contraseña"
                        type="submit"
                        variant="default"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Welcome;
