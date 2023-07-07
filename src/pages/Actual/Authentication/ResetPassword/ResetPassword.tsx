import SwitchedComponent from '@/components/UI/SwitchedComponent';
import { useState } from 'react';
import { EmailForm } from './components/EmailForm';
import { OtpForm } from './components/OtpForm';

const Login = () => {
  const [active, setActive] = useState('emailForm');

  return (
    <SwitchedComponent active={active} target="id">
      <div id="emailForm">
        <EmailForm handleClick={() => setActive('otpForm')} />
      </div>
      <div id="otpForm">
        <OtpForm />
      </div>
    </SwitchedComponent>
  );
};

export default Login;
