import { Button, Typography } from '@/components';
import { Form } from '@/components/UI/Form';
import Logo from '@/resources/img/logo/logo.png';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Link, useNavigate } from 'react-router-dom';
import BannerAuth from '../../../components/BannerAuth';

const OtpForm = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    navigate('/autenticacion/iniciar-sesion');
    return data;
  };

  const [otp, setOtp] = useState('');

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
              className="head-primary py-[10px] font-semibold xl:!text-[40px] lg:!text-[32px]"
              colors=""
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
              <div className="mt-[30px] flex gap-[20px]">
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
        <div className="w-full h-full">
          <BannerAuth />
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
