import BannerAuth from '../../../components/BannerAuth';
import { LayoutAuth } from '../../../components/LayoutAuth';
import { Button, InputForm, Typography } from '@/components';
import { Form } from '@/components/UI/Form';
import { Link } from 'react-router-dom';

interface LoginProps {
  // eslint-disable-next-line no-unused-vars
  setState: (value: string) => void;
}
const LoginUser = ({ setState }: LoginProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = () => {
    setState('loginPassword');
  };

  return (
    <LayoutAuth bannerAuth={<BannerAuth />}>
      <div className="h-full w-full max-h-screen justify-center flex flex-col gap-[14px] max-w-[350px] 2xl:w-[450px] 2xl:max-w-[500px]">
        <div className="w-full flex xl:items-center xl:justify-center lg:pt-[200px] xl:pt-0 lg:justify-center ">
          <div className="w-full pb-[50px] gap-[40px]">
            <Typography
              className="xl:!text-[30px] 2xl:!text-[40px]"
              colors="primary-color"
              size="base"
            >
              Bienvenido
            </Typography>
            <Form id="form-email" onSubmit={onSubmit}>
              <div className="pt-[15px]">
                <InputForm
                  inputMode="email"
                  label="Correo electrónico"
                  name="email"
                  required
                  type="email"
                />
              </div>
              <div className="mt-[25px]">
                <Button
                  height="xl:h-[50px] 2xl:h-[60px]"
                  id="form-email"
                  text="Iniciar sesion"
                  type="submit"
                  variant="secondary"
                />
              </div>
              <Link to="/autenticacion/registrar-usuario">
                <Typography
                  className="w-full flex justify-center xl:!text-[13px] mt-[12px] cursor-pointer lg:!text-[12px]"
                  colors="secondary-color"
                  size="sm"
                >
                  Aún no tengo cuenta
                </Typography>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </LayoutAuth>
  );
};

export default LoginUser;
