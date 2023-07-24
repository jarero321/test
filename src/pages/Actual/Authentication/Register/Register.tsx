import BannerAuth from '../components/BannerAuth';
import { LayoutAuth } from '../components/LayoutAuth';
import './styles.scss';
import { createUserAdapter } from '@/adapters';
import { createUser } from '@/api/Authentication/Authentication.api';
import { Button, Form, InputForm, Typography } from '@/components';
import CheckBox from '@/components/UI/CheckBox/CheckBox';
import { InputPassword } from '@/components/UI/InputPassword';
import { FormDataRegister } from '@/models/authentication/forms/forms.models';
import { useAuthStore } from '@/store/auth';
import { geolocalizationStore } from '@/store/geolocalization';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Auth: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const setToken = useAuthStore((state) => state.setToken);
  const { position } = geolocalizationStore();

  const navigate = useNavigate();

  const onSubmit = async (data: FormDataRegister) => {
    const userInfo = createUserAdapter(data, position);
    try {
      setLoading(true);
      await createUser(userInfo);
      setToken('test');
      navigate('/dashboard');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.message ?? '');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutAuth bannerAuth={<BannerAuth />}>
      <div>
        <Form
          className="h-full w-full max-h-screen justify-center flex flex-col gap-[20px] max-w-[350px] 2xl:w-[450px] 2xl:max-w-[500px] "
          id="register-form"
          onSubmit={(data) => onSubmit(data as unknown as FormDataRegister)}
        >
          <Typography
            className="xl:!text-[30px] 2xl:!text-[40px]"
            colors="primary-color"
            size="base"
          >
            ¡Regístrate ahora!
          </Typography>
          <div>
            <InputForm
              inputMode="email"
              label="Correo electrónico"
              name="email"
              required
              type="email"
            />
          </div>
          <div>
            <InputPassword
              inputMode="text"
              label="Contraseña"
              name="password"
              required
              type="password"
            />
          </div>
          <div>
            <InputPassword
              inputMode="text"
              label="Confirmar Contraseña"
              name="confirmPassword"
              required
              type="password"
            />
          </div>
          <div className="w-full flex items-center cursor-pointer">
            <div className="pr-[15px] mt-[6px]">
              <CheckBox />
            </div>
            <span className="opacity-[0.8] mt-[6px] text-[13px]">
              Acepto los&nbsp;
              <span className="cursor-pointer underline">
                términos y condiciones
              </span>
            </span>
          </div>
          <div>
            <div>
              <Button
                height="h-[50px]"
                id="register-form"
                loader={loading}
                text="Ingresar cuenta"
                type="submit"
                variant="secondary"
              />
            </div>
          </div>
          <div className="flex w-full justify-between gap-[12px] items-center">
            <span className="text-[13px] opacity-[0.8]">
              ¿Deseas continuar con tu registro?
            </span>
            <Link to="/autenticacion/iniciar-sesion">
              <span className="text-[13px] text-secondary cursor-pointer underline ">
                Continuar ahora
              </span>
            </Link>
          </div>
        </Form>
      </div>
    </LayoutAuth>
  );
};

export default Auth;
