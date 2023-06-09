import { LoginPassword } from './components/LoginPassword';
import { LoginUser } from './components/LoginUser';
import './styles.scss';
import SwitchedComponent from '@/components/UI/SwitchedComponent';
import { useState } from 'react';

const Login = () => {
  const [active, setActive] = useState('loginUser');

  return (
    <SwitchedComponent active={active} target="id">
      <div id="loginUser">
        <LoginUser setState={(value: string) => setActive(value)} />
      </div>
      <div id="loginPassword">
        <LoginPassword />
      </div>
    </SwitchedComponent>
  );
};

export default Login;
