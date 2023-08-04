import { Button, Typography } from '@/components';
import { Form } from '@/components/UI/FormComponents/Form';
import Logo from '@/resources/img/logo/logo.png';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Link, useNavigate } from 'react-router-dom';
import BannerAuth from '../../../components/BannerAuth';
import { LayoutAuth } from '../../../components/LayoutAuth';

const OtpForm = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    navigate('/autenticacion/iniciar-sesion');
    return data;
  };

  const [otp, setOtp] = useState('');

  return (
    <LayoutAuth bannerAuth={<BannerAuth />}>
      <div className="w-full h-full flex xl:items-center xl:justify-center">
        <div className="w-full flex xl:items-center xl:justify-center lg:pt-[200px] xl:pt-0 lg:justify-center ">
          <div className=" h-full px-[50px] pb-[50px] gap-[40px] ">
            <Typography
              className="xl:!text-[30px] 2xl:!text-[40px]"
              colors="primary-color"
              size="base"
            >
              Recuperar Contraseña
            </Typography>
            <Form className="flex flex-col gap-[20px]" onSubmit={onSubmit}>
              <div className="w-full pt-[10px]">
                <Typography
                  className="2xl:!text-[16px] pb-[12px]"
                  colors="secondary-gray"
                >
                  Ingresa el código que te enviamos por correo
                </Typography>
                <OtpInput
                  containerStyle={{
                    display: 'flex',
                    width: '100%',
                  }}
                  numInputs={6}
                  onChange={setOtp}
                  renderInput={(props) => {
                    return (
                      <input
                        {...props}
                        className="!w-[60px] h-[60px] bg-gray-100 color-black "
                      />
                    );
                  }}
                  renderSeparator={<span style={{ width: '28px' }}></span>}
                  value={otp}
                />
                <Link to="/recuperar-contraseña">
                  <Typography
                    className="w-full flex justify-center xl:!text-[16px] mt-[12px] cursor-pointer lg:!text-[12px]"
                    colors="secondary-color"
                    size="sm"
                  >
                    Reenviar código
                  </Typography>
                </Link>
              </div>
              <div className=" flex gap-[20px]">
                <Button
                  height="h-[60px]"
                  text="Cancelar"
                  type="submit"
                  variant="grey"
                />
                <Button
                  height="h-[60px]"
                  text="Aceptar"
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

export default OtpForm;
