import CheckBox from '@/components/UI/CheckBox/CheckBox';
import './styles.scss';
import { Button, Form, InputForm, Typography } from '@/components';

import Logo from '@/resources/img/logo/logo.png';
import { useAuthStore } from '@/store/auth';
import { Link, useNavigate } from 'react-router-dom';
import BannerAuth from '../components/BannerAuth';

import { createUser } from '@/api/Authentication/Authentication.api';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { FormDataRegister } from '@/models/authentication/forms/forms.models';
import { createUserAdapter } from '@/adapters';
import { geolocalizationStore } from '@/store/geolocalization';

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
    <div className="login">
      <img alt="logo paycode" className="login__logo" src={Logo} />
      <div className="login__box">
        <div className="login__box-wrap">
          <Form
            className=" flex flex-col gap-[8px]"
            id="register-form"
            onSubmit={(data) => onSubmit(data as unknown as FormDataRegister)}
          >
            <Typography
              className="font-semibold"
              colors="primary-color"
              size="base"
            >
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
            <div className="w-full h-full pt-[20px] flex items-center cursor-pointer">
              <div className="pr-[15px]">
                <CheckBox />
              </div>
              <span className="opacity-[0.8] text-[16px]">
                Acepto los&nbsp; términos y condiciones
              </span>
            </div>
            <div>
              <div className="mt-[12px]">
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
            <div className="flex w-full justify-between gap-[12px] mt-[12px] items-center">
              <span className="text-[16px] opacity-[0.8]">
                ¿Deseas continuar con tu registro?
              </span>
              <Link to="/autenticacion/iniciar-sesion">
                <span className="text-[14px] text-secondary cursor-pointer underline ">
                  Continuar ahora
                </span>
              </Link>
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
