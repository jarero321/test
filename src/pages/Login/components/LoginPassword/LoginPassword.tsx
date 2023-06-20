import '../../styles.scss';
import BannerAuth from '../BannerLogin/BannerLogin';
import { Button, InputForm, Typography } from '@/components';
import { Form } from '@/components/UI/Form';
import Logo from '@/resources/img/logo/logo.png';
import { Link } from 'react-router-dom';

const LoginUser = () => {
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
            Bienvenido C***** J*****
          </Typography>
          <Form onSubmit={onSubmit}>
            <div className="py-[15px]">
              <InputForm
                label="Contraseña"
                name="password"
                required
                type="password"
              />
            </div>
            <div className="py-[15px]">
              <InputForm
                label="Token 2FA"
                name="2FA"
                required
                type="password"
              />
            </div>
            <div className="w-full flex justify-between">
              <Link to="/register">
                <Typography
                  className="w-full flex justify-end xl:text-[14px] cursor-pointer"
                  colors="secondary"
                  size="xs"
                >
                  ¿Olvidaste tu contraseña?
                </Typography>
              </Link>
              <Link to="/register">
                <Typography
                  className="w-full flex justify-end xl:text-[14px] cursor-pointer"
                  colors="primary-color"
                  size="xs"
                >
                  No soy yo
                </Typography>
              </Link>
            </div>
            <div className="mt-[20px]">
              <Button
                height="h-[50px]"
                text="Iniciar sesión"
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
