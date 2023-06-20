import '../../styles.scss';
import BannerAuth from '../BannerLogin/BannerLogin';
import { Button, InputForm, Typography } from '@/components';
import { Form } from '@/components/UI/Form';
import Logo from '@/resources/img/logo/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EmailNoRegister } from './components/EmailNoRegister';

const LoginUser = () => {
  const [emailRegister, setEmailRegister] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    return data;
  };

  return (
    <div className="login">
      <img alt="logo paycode" className="login__logo" src={Logo} />
      <div className="login__box">
        <div className="login__box-wrap">
          <Typography className="head-primary py-[10px]" colors="" size="base">
            Ingresa tu correo electrónico
          </Typography>
          <Form onSubmit={onSubmit}>
            <div className="pt-[15px]">
              <InputForm
                inputMode="email"
                label="Correo electrónico"
                name="email"
                required
                type="email"
              />
            </div>
            {!emailRegister ? (
              <EmailNoRegister />
            ) : (
              <Link to="/register">
                <Typography
                  className="w-full flex justify-end xl:text-[14px] cursor-pointer"
                  colors="secondary"
                  size="xs"
                >
                  Aún no tengo una cuenta
                </Typography>
              </Link>
            )}
            <div className="mt-[20px]">
              <Button
                height="h-[50px]"
                text="Iniciar sesion"
                type="submit"
                variant="secondary"
              />
            </div>
          </Form>
        </div>
      </div>
      <div className="login__banner">
        <BannerAuth />
      </div>
    </div>
  );
};

export default LoginUser;
