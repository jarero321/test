import { Typography } from '@/components';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

function EditableAddress() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 m-2">
        {/* Add the edit icon here */}
        <EditIcon
          onClick={() => navigate('/dashboard/editar-direccion')}
          style={{ cursor: 'pointer', marginTop: '2.3rem' }}
        />
      </div>
      <Typography size="sm" className="font-bold">
        Domicilio
      </Typography>
      <br />
      <Typography size="xs" className="font-bold">
        Avenida Paseo de la Reforma 255 Piso 14 A, Colonia Cuauhtémoc, Alcaldía
        Colonia Cuauhtémoc CP 06500, Ciudad de México, CDMX
      </Typography>
    </div>
  );
}

export default EditableAddress;
