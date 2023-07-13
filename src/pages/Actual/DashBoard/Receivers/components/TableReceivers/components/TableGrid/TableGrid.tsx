import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { ModalToken } from '@/components/UI/Modal/ModalToken';
import { InputForm, Typography } from '@/components';
import SuccessIcon from '@/resources/icons/SuccessIcon';
const columns = [
  {
    headerClassName: 'text-[15px] text-primary-color',
    field: 'receivers',
    headerName: 'Beneficiario',
    flex: 1,
    minWidth: 60,
    type: 'string',
  },
  {
    headerClassName: 'text-[15px] text-primary-color',
    field: 'relationship',
    headerName: 'Parentesco',
    flex: 1,
    minWidth: 60,
    type: 'string',
  },
  {
    headerClassName: 'text-[15px] text-primary-color',
    field: 'percentage',
    headerName: 'Porcentaje',
    flex: 1,
    minWidth: 60,
    type: 'string',
  },
  {
    headerClassName: 'text-[15px] text-primary-color',
    field: 'officialIdentification',
    headerName: 'Identificación Oficial',
    flex: 1,
    minWidth: 60,
    type: 'string',
  },
  {
    headerClassName: 'text-[15px] text-primary-color',
    field: 'addressProof',
    headerName: 'Comprobante de domicilio',
    flex: 1,
    minWidth: 60,
    type: 'string',
  },
  {
    headerClassName: 'text-[15px] text-primary-color',
    field: 'edition',
    headerName: 'Edición',
    flex: 1,
    minWidth: 60,
    type: 'string',
    renderCell: (params: any) => {
      const [isModalOpen, setIsModalOpen] = useState(false);

      const closeModal = () => {
        setIsModalOpen(false);
      };

      return (
        <div className="W-full flex gap-[10px] items-center">
          <EditIcon
            style={{ cursor: 'pointer', color: '#3D1152', opacity: '0.7' }}
            onClick={() => setIsModalOpen(true)}
          />
          <ModalToken
            isOpen={isModalOpen}
            onClose={closeModal}
            title="Alta Nuevo Beneficiario"
            content={
              <>
                <Typography className="text-gray-600" colors="black" size="xs">
                  Ingrese tú 2FA para confirmar el alta del beneficiario:
                </Typography>
                <div className="p-6 space-y-6 text-center">
                  <Typography className="text-center" size="lg">
                    Token 2fa
                  </Typography>
                  <div>
                    {/* <InputForm label="" name="name" placeholder="000000" /> */}
                  </div>
                </div>
              </>
            }
            contentNext={
              <>
                <div className="m-auto w-40 h-40">
                  <SuccessIcon />
                </div>
                <Typography className="text-center" colors="black" size="sm">
                  El beneficiario ha sido dado de alta exitosamente
                </Typography>
              </>
            }
          />
          <CloseIcon
            style={{ cursor: 'pointer', color: '#3D1152', opacity: '0.7' }}
          />
        </div>
      );
    },
  },
];

const rows = [
  {
    id: 3467,
    receivers: 'Luis Miguel Saavedra Hernández',
    relationship: 'Padre',
    percentage: '50%',
    officialIdentification: 'MiiIne_frent.jpeg',
    addressProof: 'Recibo_Luz.JPG',
    edition: 'Edición 1',
  },
  {
    id: 3465,
    receivers: 'Christopher U. Mariscal Alcauter',
    relationship: 'Hijo',
    percentage: '50%',
    officialIdentification: 'Credencialparavotar_completa.jpeg',
    addressProof: 'Comprobante_Teléfono.jpeg',
    edition: 'Edición 1',
  },
  // ... agregar más filas de datos aquí ...
];

function TableGrid() {
  return (
    <div
      className="border-t border-gray-300"
      style={{ height: 500, width: '100%' }}
    >
      <DataGrid
        autoPageSize
        checkboxSelection={false}
        className="border-l border-r border-b"
        columns={columns}
        rowHeight={52}
        rows={rows}
        style={{
          borderLeft: 'none',
          borderRight: 'none',
          borderBottom: 'none',
          borderTop: 'none',
        }}
        // Elimina los bordes de las row
        sx={{ '&, [class^=MuiDataGrid]': { border: 'none' } }}
      />
    </div>
  );
}

export default TableGrid;
