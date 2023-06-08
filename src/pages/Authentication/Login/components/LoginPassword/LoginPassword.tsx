import '../../styles.scss';
import { Button, InputForm, Typography } from '@/components';
import { Form } from '@/components/UI/Form';
import Logo from '@/resources/img/logo/logo.png';
import { Link } from 'react-router-dom';
import BannerAuth from '../BannerAuth';

const LoginUser = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    return data;
  };

  const name = 'Ca**** J****';
  return (
    <div className="w-full h-screen">
      <img
        alt="logo paycode"
        className="w-[185px] absolute top-[60px] left-[60px] "
        src={Logo}
      />
      <div className="w-full h-full flex xl:items-center xl:justify-center">
        <div className="w-full flex xl:items-center xl:justify-center lg:pt-[200px] xl:pt-0 lg:justify-center ">
          <div className="2xl:w-[60%] lg:w-[90%] h-full px-[50px] pb-[50px] gap-[40px] ">
            <Typography
              className="head-primary py-[10px] font-semibold xl:!text-[35px] lg:!text-[32px]"
              colors=""
              size="base"
            >
              Bienvenido {name}
            </Typography>
            <Form onSubmit={onSubmit}>
              <div className="pt-[15px]">
                <InputForm
                  inputMode="email"
                  label="Correo electrónico"
                  name="email"
                  required
                  type="password"
                />
              </div>
              <div className="pt-[25px]">
                <InputForm
                  inputMode="email"
                  label="Correo electrónico"
                  name="email"
                  required
                  type="password"
                />
              </div>
              <Link to="/recuperar-contraseña">
                <Typography
                  className="w-full flex justify-end xl:!text-[16px] mt-[12px] cursor-pointer lg:!text-[12px]"
                  colors="secondary-color"
                  size="sm"
                >
                  Olvide mi contraseña
                </Typography>
              </Link>
              <div className="mt-[30px] flex gap-[20px] ">
                <Button
                  height="h-[60px]"
                  text="No soy yo"
                  type="submit"
                  variant="grey"
                />
                <Button
                  height="h-[60px]"
                  text="Iniciar sesion"
                  type="submit"
                  variant="secondary"
                />
              </div>
            </Form>
          </div>
        </div>
        <div className="w-full h-full">
          <BannerAuth />
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
