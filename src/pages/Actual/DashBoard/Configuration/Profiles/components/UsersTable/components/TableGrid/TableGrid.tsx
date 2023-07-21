import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { Button, Typography } from '@/components';

const rows = [
  {
    id: 3467,
    idUsers: '1',
    fullName: 'Griselda Juárez López',
    email: 'griselda.juarez@kuspit.com',
    status: 'Activo',
    role: 'Analista',
    entryDate: '26/junio/2023',
    edition: 'Edición 1',
  },
  {
    id: 3465,
    idUsers: '2',
    fullName: 'Luis Miguel Saavedra Hernández',
    email: 'luis.ssvedra@kuspit.com',
    status: 'Activo',
    role: 'Administrador',
    entryDate: '26/agosto/2010',
    edition: 'Edición 1',
  },
];

function TableGrid() {
  const [openEdit, setOpenEdit] = useState(false);

  const columns = [
    {
      headerClassName: 'text-[15px] text-primary-color',
      field: 'idUsers',
      headerName: 'id Usuario',
      flex: 1,
      minWidth: 60,
      type: 'string',
    },
    {
      headerClassName: 'text-[15px] text-primary-color',
      field: 'fullName',
      headerName: 'Nombre completo',
      flex: 1,
      minWidth: 60,
      type: 'string',
    },
    {
      headerClassName: 'text-[15px] text-primary-color',
      field: 'email',
      headerName: 'Email',
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
      field: 'role',
      headerName: 'Rol',
      flex: 1,
      minWidth: 60,
      type: 'string',
    },
    {
      headerClassName: 'text-[15px] text-primary-color',
      field: 'entryDate',
      headerName: 'Fecha de ingreso',
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
      renderCell: (params: any) => (
        <div className="W-full flex gap-[10px] items-center">
          <div onClick={() => setOpenEdit(true)}>
            <EditIcon
              style={{ cursor: 'pointer', color: '#3D1152', opacity: '0.7' }}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="font-bold">
          <Typography size="sm">Usuarios</Typography>
        </div>
        <Button
          text="Agregar Nuevo Beneficiario +"
          type="button"
          variant="secondary"
          width="w-[250px]"
        />
      </div>
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
        {/* <ModalUpdate isOpen={openEdit} onClose={() => setOpenEdit(false)} /> */}
      </div>
    </>
  );
}

export default TableGrid;
