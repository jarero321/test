import '../../styles.scss';
import { Button, InputForm, Typography } from '@/components';
import { Form } from '@/components/UI/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/auth';
import { LayoutAuth } from '../../../components/LayoutAuth';
import BannerAuth from '../../../components/BannerAuth/BannerAuth';

const LoginUser = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    setToken('test');
    navigate('/dashboard');
    return data;
  };

  const name = 'Ca**** J****';
  return (
    <LayoutAuth bannerAuth={<BannerAuth />}>
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
              <div className="pt-[25px]">
                <InputForm
                  label="Contraseña"
                  name="password"
                  required
                  type="password"
                />
              </div>
              <Link to="/autenticacion/reestablecer-credenciales">
                <Typography
                  className="w-full flex justify-end xl:!text-[14px] mt-[12px] cursor-pointer lg:!text-[12px]"
                  colors="secondary-color"
                  size="sm"
                >
                  Olvide mi contraseña
                </Typography>
              </Link>
              <div className="mt-[20px] flex gap-[20px] ">
                <Button
                  height="h-[60px]"
                  onClick={() => navigate('/autentication/iniciar-sesion')}
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
      </div>
    </LayoutAuth>
  );
};

export default LoginUser;
