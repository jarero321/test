import { Button, Layout, SideBarMenu, Typography } from '@/components';

const Logout = () => {
  return (
    <>
      <Layout
        sideBar={
          <SideBarMenu
            btnLogout={false}
            display
            titleSideBar="Cierre de sesión"
          />
        }
      >
        <div className="w-full h-full flex">
          <div className="w-full">
            <div className="w-full h-full py-[50px] px-[50px]">
              <Typography
                className="head-primary py-[10px] mb-6"
                colors=""
                size="base"
              >
                Has cerrado sesión correctamente
              </Typography>
              <Typography
                className="head-primary py-[10px] mb-6"
                colors=""
                size="xs"
              >
                Gracias por usar las soluciones de negocio DyP
              </Typography>
              <Button
                height="h-[70px] w-[310px]"
                text="Haz click para continuar"
                type="button"
                variant="default"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Logout;
