import './styles.scss';
import { Layout, SideBarMenu, Typography } from '@/components';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Depósitos', 'Retiros', 'Saldo final'],
  datasets: [
    {
      label: '',
      data: [116583, 66583, 43365],
      backgroundColor: [
        'rgba(61, 17, 82, 0.36)',
        'rgba(61, 17, 82, 1)',
        'rgba(194, 213, 0, 1)',
      ],
      borderColor: [
        'rgba(61, 17, 82, 0.36)',
        'rgba(61, 17, 82, 1)',
        'rgba(194, 213, 0, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const EstadoCuenta: React.FC = () => {
  return (
    <Layout sideBar={<SideBarMenu display titleSideBar="Estado de cuenta" />}>
      <div className="w-full h-full flex">
        <div className="w-full">
          <div className="w-full h-full py-[50px] px-[50px]">
            <Typography
              className="head-primary py-[10px] mb-6"
              colors=""
              size="base"
            >
              Estado de cuenta
            </Typography>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2">
                <Typography
                  className="head-primary py-[10px] mb-2"
                  colors=""
                  size="xs"
                >
                  Eduardo Saavedra Bernard
                </Typography>
                <Typography
                  className="head-primary py-[10px] mb-2"
                  colors=""
                  size="xs"
                >
                  Avenida Paseo de la Reforma 255 Piso 14 Cuahtémoc, Cuauhtémoc,
                  CDMX CP 16018
                </Typography>
                <Typography
                  className="head-primary py-[10px] mb-2"
                  colors=""
                  size="xs"
                >
                  <strong> Número de Cliente: </strong> 2395739
                </Typography>
                <Typography
                  className="head-primary py-[10px] mb-2"
                  colors=""
                  size="xs"
                >
                  <strong> RFC: </strong> SABEE7902128V0
                </Typography>
              </div>
              <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2">
                <div className="flex flex-col m-[50px]">
                  <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                      <div className="overflow-hidden">
                        <table className="min-w-full">
                          <caption className="bg-primary-color">
                            <Typography
                              className="py-2 px-5 text-left text-white"
                              colors="white"
                              size="sm"
                            >
                              Periodo
                            </Typography>
                          </caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                <Typography
                                  className="px-3 py-1 text-left font-normal"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  Periodo
                                </Typography>
                              </th>
                              <th scope="col">
                                <Typography
                                  className="px-3 py-1 text-left font-normal"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  01/07/2022 al 01/08/2022
                                </Typography>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="col">
                                <Typography
                                  className="px-3 py-1 text-left font-normal"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  Fecha de corte
                                </Typography>
                              </th>
                              <th scope="col">
                                <Typography
                                  className="px-3 py-1 text-left font-normal"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  31/08/2022
                                </Typography>
                              </th>
                            </tr>
                            <tr>
                              <th scope="col">
                                <Typography
                                  className="px-3 py-1 text-left font-normal"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  Moneda
                                </Typography>
                              </th>
                              <th scope="col">
                                <Typography
                                  className="px-3 py-1 text-left font-normal"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  Pesos
                                </Typography>
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4">
                <table className="min-w-full">
                  <caption className="bg-primary-color ">
                    <Typography
                      className="py-2 px-5 text-left text-white flex justify-center"
                      colors="white"
                      size="sm"
                    >
                      Resumen
                    </Typography>
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">
                        <Typography
                          className="px-6 py-3 text-left"
                          colors="primary-color"
                          size="xs"
                        >
                          Producto
                        </Typography>
                      </th>
                      <th scope="col">
                        <Typography
                          className="px-6 py-3 text-left"
                          colors="primary-color"
                          size="xs"
                        >
                          Número de cuenta
                        </Typography>
                      </th>
                      <th scope="col">
                        <Typography
                          className="px-6 py-3 text-left"
                          colors="primary-color"
                          size="xs"
                        >
                          CLABE
                        </Typography>
                      </th>
                      <th scope="col">
                        <Typography
                          className="px-6 py-3 text-left"
                          colors="primary-color"
                          size="xs"
                        >
                          Saldo anterior
                        </Typography>
                      </th>
                      <th scope="col">
                        <Typography
                          className="px-6 py-3 text-left"
                          colors="primary-color"
                          size="xs"
                        >
                          Saldo al corte
                        </Typography>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="divider-bottom">
                      <th scope="col">
                        <Typography
                          className="px-6 py-3 text-left font-normal"
                          colors="primary-color"
                          size="xs"
                        >
                          Cuenta de fondos de pago electrónico
                        </Typography>
                      </th>
                      <th scope="col">
                        <Typography
                          className="px-6 py-3 text-left font-normal"
                          colors="primary-color"
                          size="xs"
                        >
                          3494593029
                        </Typography>
                      </th>
                      <th scope="col">
                        <Typography
                          className="px-6 py-3 text-left font-normal"
                          colors="primary-color"
                          size="xs"
                        >
                          930474485124583291{' '}
                        </Typography>
                      </th>
                      <th scope="col">
                        <Typography
                          className="px-6 py-3 text-left font-normal"
                          colors="primary-color"
                          size="xs"
                        >
                          $96,369.31
                        </Typography>
                      </th>
                      <th scope="col">
                        <Typography
                          className="px-6 py-3 text-left font-normal"
                          colors="primary-color"
                          size="xs"
                        >
                          $116,583.86
                        </Typography>
                      </th>
                    </tr>
                    <tr className="divider-bottom">
                      <th scope="col">
                        <Typography
                          className="px-6 py-3 text-left"
                          colors="primary-color"
                          size="xs"
                        >
                          Total
                        </Typography>
                      </th>
                      <th scope="col">
                        <Typography
                          className="px-6 py-3 text-left"
                          colors="primary-color"
                          size="xs"
                        ></Typography>
                      </th>
                      <th scope="col">
                        <Typography
                          className="px-6 py-3 text-left"
                          colors="primary-color"
                          size="xs"
                        ></Typography>
                      </th>
                      <th scope="col">
                        <Typography
                          className="px-6 py-3 text-left"
                          colors="primary-color"
                          size="xs"
                        >
                          $96,369.31
                        </Typography>
                      </th>
                      <th scope="col">
                        <Typography
                          className="px-6 py-3 text-left"
                          colors="primary-color"
                          size="xs"
                        >
                          $116,583.86
                        </Typography>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-[50px]">
              <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2">
                <div className="flex flex-col">
                  <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                      <div className="overflow-hidden">
                        <table className="min-w-full">
                          <thead>
                            <tr>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  Detalle
                                </Typography>
                              </th>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  Fondos de pago electrónico
                                </Typography>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left "
                                  colors="primary-color"
                                  size="xs"
                                >
                                  Resumen del periodo
                                </Typography>
                              </th>
                            </tr>
                            <tr>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  Saldo inicial del periodo
                                </Typography>
                              </th>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  93,369.31
                                </Typography>
                              </th>
                            </tr>
                            <tr>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  Total de depósitos{' '}
                                </Typography>
                              </th>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  65,583.37{' '}
                                </Typography>
                              </th>
                            </tr>
                            <tr>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  Total de retiros
                                </Typography>
                              </th>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  46,365.84
                                </Typography>
                              </th>
                            </tr>
                            <tr>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  Intereses netos ganados{' '}
                                </Typography>
                              </th>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  0.00
                                </Typography>
                              </th>
                            </tr>
                            <tr>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  Total de comisiones cobradas/pagadas{' '}
                                </Typography>
                              </th>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  3.00
                                </Typography>
                              </th>
                            </tr>
                            <tr>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  IVA sobre comisiones (16%){' '}
                                </Typography>
                              </th>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  0.48
                                </Typography>
                              </th>
                            </tr>
                            <tr>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  Intereses cobrados / pagados{' '}
                                </Typography>
                              </th>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  0.00
                                </Typography>
                              </th>
                            </tr>
                            <tr>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  Saldo actual
                                </Typography>
                              </th>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  116,583.86
                                </Typography>
                              </th>
                            </tr>
                            <tr>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  Saldo disponible al día *{' '}
                                </Typography>
                              </th>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  116,583.86
                                </Typography>
                              </th>
                            </tr>
                            <tr>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  Saldo promedio
                                </Typography>
                              </th>
                            </tr>
                            <tr>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  Saldo promedio mínimo{' '}
                                </Typography>
                              </th>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  0.00
                                </Typography>
                              </th>
                            </tr>
                            <tr>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  En el periodo 01 al 31 de Julio{' '}
                                </Typography>
                              </th>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  84,416.15
                                </Typography>
                              </th>
                            </tr>
                            <tr>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  Días que comprende el periodo{' '}
                                </Typography>
                              </th>
                              <th scope="col">
                                <Typography
                                  className="px-6 py-3 text-left font-medium"
                                  colors="primary-color"
                                  size="xs"
                                >
                                  31
                                </Typography>
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2">
                <Typography
                  className="px-6 py-3 text-left text-center font-bold"
                  colors="primary-color"
                  size="xs"
                >
                  Fondos de pago electrónico
                </Typography>
                <div className="chart">
                  <Doughnut data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EstadoCuenta;
