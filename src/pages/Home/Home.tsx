import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <Link to="/autenticacion/iniciar-sesion">
        {' '}
        Autenticacion / iniciar sesion{' '}
      </Link>
    </div>
  );
};

export default Home;
