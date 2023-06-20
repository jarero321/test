import './styles.scss';
import { Button, InputForm, Typography } from '@/components';
import { Form } from '@/components/UI/Form';
import Logo from '@/resources/img/logo/logo.png';
import BannerAuth from '../Login/components/BannerLogin/BannerLogin';

const ResetPassword = () => {
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
            Cambiar contraseña
          </Typography>
          <Form onSubmit={onSubmit}>
            <div className="py-[15px]">
              <InputForm
                label="Ingrese la nueva contraseña"
                name="password"
                required
                type="password"
              />
            </div>
            <div className="py-[15px]">
              <InputForm
                label="Confimar la nueva contraseña"
                name="2FA"
                required
                type="password"
              />
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

export default ResetPassword;
