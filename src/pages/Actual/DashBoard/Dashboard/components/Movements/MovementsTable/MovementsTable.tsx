import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Clave de rastreo',
    headerClassName: 'text-[13px] text-primary-color',
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
    headerClassName: 'text-[13px] text-primary-color',
    editable: true,
  },
  {
    field: 'date-payment',
    headerName: 'Fecha Pago',
    headerClassName: 'text-[13px] text-primary-color',
    editable: true,
  },
  {
    field: 'disperse',
    headerName: 'Dispersa',
    type: 'number',
    headerClassName: 'text-[13px] text-primary-color',
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
    headerClassName: 'text-[13px] text-primary-color',
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
    headerClassName: 'text-[13px] text-primary-color',
    editable: true,
  },
  {
    field: 'concept',
    headerName: 'Concepto',
    type: 'number',
    headerClassName: 'text-[13px] text-primary-color',
    editable: true,
  },
  {
    field: 'bank-account',
    headerName: 'Cuenta bancaria',
    type: 'number',
    headerClassName: 'text-[13px] text-primary-color',
    editable: true,
  },
  {
    field: 'reference',
    headerName: 'Ingreso',
    type: 'number',
    headerClassName: 'text-[13px] text-primary-color',
    editable: true,
  },
  {
    field: 'payment',
    headerName: 'Pago',
    type: 'number',
    headerClassName: 'text-[13px] text-primary-color',
    editable: true,
  },
];

export default function MovementsTable() {
  return (
    <Grid>
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
    </Grid>
  );
}
