import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Alias', width: 300 },
  {
    field: 'lastName',
    headerName: 'CLABE',
    width: 200,
    editable: true,
  },
  {
    field: 'firstName',
    headerName: 'Fecha',
    width: 250,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Saldo',
    type: 'number',
    width: 250,
    editable: true,
  },
];

const rows = [
  {
    id: 'Cuenta para proveedores',
    lastName: '**********0408',
    firstName: '12/08/2022',
    age: '37,500.00',
  },
  {
    id: 'Cuenta para administración',
    lastName: '**********0438',
    firstName: '12/08/2012',
    age: '37,500.00',
  },
  {
    id: 'Cuenta para nóminas',
    lastName: '**********04328',
    firstName: '12/08/2013',
    age: '37.500.00',
  },
  {
    id: 'Cuenta para gastos extraordinarios',
    lastName: '**********1408',
    firstName: '12/08/2021',
    age: '37.500.00',
  },
];

export default function TableAccount() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        checkboxSelection
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
