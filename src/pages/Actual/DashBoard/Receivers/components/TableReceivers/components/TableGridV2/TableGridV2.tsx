import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import Switch from '@mui/material/Switch';
import { ModalUpdate } from '../ModalUpdate';
import { useState } from 'react';
import { ModalDelete } from '../ModalDelete';
import { ModalInhabilite } from '../ModalInhabilite';

const rows = [
  {
    id: 3467,
    alias: 'Gris',
    receivers: 'Griselda Juarez Lopez',
    bank: 'BBVA Bancomer',
    account: 'Cuenta CLABE',
    operation: '********954385347',
    rfc: 'GELJ3213213123MV2',
    curp: 'CRSAD403498FDSFS',
    status: 'Activo',
    edition: 'Edición 1',
  },
  {
    id: 3465,
    alias: 'Gris',
    receivers: 'Griselda Juarez Lopez',
    bank: 'BBVA Bancomer',
    account: 'Cuenta CLABE',
    operation: '********954385347',
    rfc: 'GELJ3213213123MV2',
    curp: 'CRSAD403498FDSFS',
    status: 'Activo',
    edition: 'Edición 1',
  },
  // ... agregar más filas de datos aquí ...
];

function TableGridV2() {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openInhabilite, setOpenInhabilite] = useState(false);

  const columns = [
    {
      headerClassName: 'text-[15px] text-primary-color',
      field: 'id',
      headerName: 'Cuenta',
      width: 100,
      type: 'number',
    },
    {
      headerClassName: 'text-[15px] text-primary-color',
      field: 'alias',
      headerName: 'Alias',
      flex: 1,
      minWidth: 40,
      type: 'string',
    },
    {
      headerClassName: 'text-[15px] text-primary-color',
      field: 'receivers',
      headerName: 'Destinatarios',
      flex: 1,
      minWidth: 60,
      type: 'string',
    },
    {
      headerClassName: 'text-[15px] text-primary-color',
      field: 'bank',
      headerName: 'Institución Bancaria',
      flex: 1,
      minWidth: 60,
      type: 'string',
    },
    {
      headerClassName: 'text-[15px] text-primary-color',
      field: 'account',
      headerName: 'Cuenta',
      flex: 1,
      minWidth: 60,
      type: 'string',
    },
    {
      headerClassName: 'text-[15px] text-primary-color',
      field: 'operation',
      headerName: 'Límite de Operación',
      flex: 1,
      minWidth: 60,
      type: 'string',
    },
    {
      headerClassName: 'text-[15px] text-primary-color',
      field: 'rfc',
      headerName: 'RFC',
      flex: 1,
      minWidth: 60,
      type: 'string',
    },
    {
      headerClassName: 'text-[15px] text-primary-color',
      field: 'curp',
      headerName: 'CURP',
      flex: 1,
      minWidth: 60,
      type: 'string',
    },
    {
      headerClassName: 'text-[15px] text-primary-color',
      field: 'status',
      headerName: 'Estatus',
      flex: 1,
      minWidth: 60,
      type: 'string',
    },
    {
      headerClassName: 'text-[15px] text-primary-color',
      field: 'edition',
      headerName: 'Edición',
      flex: 1,
      minWidth: 150,
      type: 'string',
      renderCell: (params: any) => (
        <div className="W-full min-w-[80px] flex gap-[10px] items-center">
          <div onClick={() => setOpenEdit(true)}>
            <EditIcon
              style={{ cursor: 'pointer', color: '#3D1152', opacity: '0.7' }}
            />
          </div>
          <div onClick={() => setOpenDelete(true)}>
            <CloseIcon
              style={{ cursor: 'pointer', color: '#3D1152', opacity: '0.7' }}
            />
          </div>
          <div onClick={() => setOpenInhabilite(true)}>
            <Switch
              checked={params.value}
              sx={{
                '& .MuiSwitch-thumb': {
                  backgroundColor: params.value ? '#3D1152' : 'white',
                },
                '.MuiSwitch-track': {
                  backgroundColor: params.value
                    ? 'rgba(61, 17, 82, 0.3) !important'
                    : 'rgba(61, 17, 82, 0.3) !important',
                },
              }}
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div
      className="border-t border-gray-300"
      style={{ height: 500, width: '100%' }}
    >
      <DataGrid
        autoPageSize
        className="border-l border-r border-b"
        columns={columns}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'bg-[#F5F6F8]'
        }
        rowHeight={52}
        rows={rows}
        style={{
          borderLeft: 'none',
          borderRight: 'none',
          borderBottom: 'none',
          borderTop: 'none',
        }}
        sx={{ '&, [class^=MuiDataGrid]': { border: 'none' } }}
      />
      <ModalUpdate isOpen={openEdit} onClose={() => setOpenEdit(false)} />
      <ModalDelete isOpen={openDelete} onClose={() => setOpenDelete(false)} />
      <ModalInhabilite
        isOpen={openInhabilite}
        onClose={() => setOpenInhabilite(false)}
      />
    </div>
  );
}

export default TableGridV2;
