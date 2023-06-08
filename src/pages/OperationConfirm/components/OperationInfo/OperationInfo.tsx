import { Typography } from '@/components';
import React from 'react';

const OperationInfo: React.FC = () => {
  return (
    <div className="w-full h-full">
      <table className="w-full text-sm text-left">
        <thead className="striped">
          <tr>
            <th className="px-6 py-3" scope="col">
              <Typography
                className="font-normal"
                colors="primary-color"
                size="xs"
              >
                Tipo de operación
              </Typography>
            </th>
            <td className="px-6 py-4">
              <Typography
                className="font-normal"
                colors="primary-color"
                size="xs"
              >
                Instrucción de depósito
              </Typography>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <th className="px-6 py-4 font-medium" scope="row">
              <Typography
                className="font-normal"
                colors="primary-color"
                size="xs"
              >
                Fecha de instrucción
              </Typography>
            </th>
            <td className="px-6 py-4">
              <Typography
                className="font-normal"
                colors="primary-color"
                size="xs"
              >
                01/01/2021
              </Typography>
            </td>
          </tr>
          <tr className="border-b striped">
            <th className="px-6 py-4 font-medium" scope="row">
              <Typography
                className="font-normal"
                colors="primary-color"
                size="xs"
              >
                Hora de instrucción
              </Typography>
            </th>
            <td className="px-6 py-4">
              <Typography
                className="font-normal"
                colors="primary-color"
                size="xs"
              >
                11:00:00 horas
              </Typography>
            </td>
          </tr>
          <tr className="bg-white border-b striped">
            <th className="px-6 py-4 font-medium" scope="row">
              <Typography
                className="font-normal"
                colors="primary-color"
                size="xs"
              >
                Nombre del Remitente
              </Typography>
            </th>
            <td className="px-6 py-4">
              <Typography
                className="font-normal"
                colors="primary-color"
                size="xs"
              >
                Eduardo Bernard Saavedra
              </Typography>
            </td>
          </tr>
          <tr className="border-b striped">
            <th className="px-6 py-4 font-medium" scope="row">
              <Typography
                className="font-normal"
                colors="primary-color"
                size="xs"
              >
                Cuenta déposito
              </Typography>
            </th>
            <td className="px-6 py-4">
              <Typography
                className="font-normal"
                colors="primary-color"
                size="xs"
              >
                <strong> *********3400 </strong>
              </Typography>
            </td>
          </tr>
          <tr className="bg-white border-b striped">
            <th className="px-6 py-4 font-medium" scope="row">
              <Typography
                className="font-normal"
                colors="primary-color"
                size="xs"
              >
                Banco
              </Typography>
            </th>
            <td className="px-6 py-4">
              <Typography
                className="font-normal"
                colors="primary-color"
                size="xs"
              >
                BANREGIO
              </Typography>
            </td>
          </tr>
          <tr className=" border-b striped">
            <th className="px-6 py-4 font-medium" scope="row">
              <Typography
                className="font-normal"
                colors="primary-color"
                size="xs"
              >
                Importe
              </Typography>
            </th>
            <td className="px-6 py-4">
              <Typography
                className="font-normal"
                colors="primary-color"
                size="xs"
              >
                <strong>$5,000.00 MXN</strong>
              </Typography>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OperationInfo;
