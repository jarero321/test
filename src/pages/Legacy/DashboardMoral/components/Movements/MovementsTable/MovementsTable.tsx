import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Clave',
    width: 90,
    renderCell: (params) => {
      return (
        <div className="flex gap-[5px] items-center">
          <div className="w-[17px] h-[17px] bg-secondary flex items-center justify-center text-white">
            {' '}
            P{' '}
          </div>
          {params.value}
        </div>
      );
    },
  },
  {
    field: 'date-elaboration',
    headerName: 'Fecha elaboracion',
    width: 150,
    editable: true,
  },
  {
    field: 'date-payment',
    headerName: 'Fecha Pago',
    width: 100,
    editable: true,
  },
  {
    field: 'disperse',
    headerName: 'Dispersa',
    type: 'number',
    width: 100,
    editable: true,
    renderCell: (params) => {
      return (
        <div className="flex gap-[5px] items-center">
          <div className="px-[10px] bg-secondary flex items-center justify-center text-white">
            {params.value}
          </div>
        </div>
      );
    },
  },
  {
    field: 'info',
    headerName: 'Info',
    type: 'number',
    width: 100,
    editable: true,
    renderCell: (params) => {
      return (
        <div className="flex gap-[5px] items-center">
          <div className="px-[10px] bg-secondary flex items-center justify-center text-white">
            {params.value}
          </div>
        </div>
      );
    },
  },
  {
    field: 'beneficiary',
    headerName: 'Beneficiario',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'concept',
    headerName: 'Concepto',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'bank-account',
    headerName: 'Cuenta bancaria',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'reference',
    headerName: 'Ingreso',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'payment',
    headerName: 'Pago',
    type: 'number',
    width: 100,
    editable: true,
  },
];

const rows = [
  {
    id: 'SP0003',
    'date-elaboration': '30-mar-2021',
    'date-payment': '30-mar-2021 12:00',
    disperse: '0000001',
    info: 'CEP',
    beneficiary: '0000001',
    concept: '0000001',
    'bank-account': '0000001',
    reference: '0000001',
    payment: '0000001',
  },
  {
    id: 'SP0003',
    'date-elaboration': '30-mar-2021',
    'date-payment': '30-mar-2021 12:00',
    disperse: '0000001',
    info: 'CEP',
    beneficiary: '0000001',
    concept: '0000001',
    'bank-account': '0000001',
    reference: '0000001',
    payment: '0000001',
  },
  {
    id: 'SP0003',
    'date-elaboration': '30-mar-2021',
    'date-payment': '30-mar-2021 12:00',
    disperse: '0000001',
    info: 'CEP',
    beneficiary: '0000001',
    concept: '0000001',
    'bank-account': '0000001',
    reference: '0000001',
    payment: '0000001',
  },
];

export default function MovementsTable() {
  return (
    <Box sx={{ height: 300, width: '100%' }}>
      <DataGrid
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        rows={rows}
      />
    </Box>
  );
}
