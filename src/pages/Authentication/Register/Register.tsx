import CheckBox from '@/components/UI/CheckBox/CheckBox';
import BannerAuth from '../Login/components/BannerAuth';
import './styles.scss';
import { Button, Form, InputForm, Typography } from '@/components';

import Logo from '@/resources/img/logo/logo.png';

const Auth: React.FC = () => {
  const onSubmit = () => {
    return 'hi';
  };

  return (
    <div className="login">
      <img alt="logo paycode" className="login__logo" src={Logo} />
      <div className="login__box">
        <div className="login__box-wrap">
          <Form className=" flex flex-col" onSubmit={onSubmit}>
            <Typography colors="primary-color" size="base">
              ¡Regístrate ahora!
            </Typography>
            <div className="pt-[24px]">
              <InputForm
                inputMode="email"
                label="Correo electrónico"
                name="email"
                required
                type="email"
              />
            </div>
            <div className="pt-[24px]">
              <InputForm
                inputMode="text"
                label="Contraseña"
                name="password"
                required
                type="password"
              />
            </div>
            <div className="pt-[24px]">
              <InputForm
                inputMode="text"
                label="Confirmar Contraseña"
                name="confirmPassword"
                required
                type="password"
              />
            </div>
            <div className="w-full h-full pt-[20px] flex items-center">
              <div className="pr-[15px]">
                <CheckBox />
              </div>
              <span className="opacity-[0.8] text-[16px]">
                Acepto los&nbsp; términos y condiciones
              </span>
            </div>
            <div>
              <div className="mt-[20px]">
                <Button
                  height="h-[50px]"
                  text="Ingresar cuenta"
                  type="submit"
                  variant="secondary"
                />
              </div>
            </div>
            <div className="flex w-full justify-between gap-[12px] mt-[12px] items-center">
              <span className="text-[16px] opacity-[0.8]">
                ¿Deseas continuar con tu registro?
              </span>
              <span className="text-[14px] text-secondary cursor-pointer underline ">
                Continuar ahora
              </span>
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

export default Auth;
