import { NavButton } from './NavButton';
import styles from './index.module.scss';
import { Button } from '@/components/UI/Button';
import { Typography } from '@/components/UI/Typography';
import LogoDyP from '@/resources/img/logo/logo.png';
import IonIcon from '@reacticons/ionicons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface InterfaceSideBar {
  display: boolean;
  titleSideBar?: string;
  btnLogout?: boolean;
}

const SideBar: React.FC<InterfaceSideBar> = ({
  display = true,
  titleSideBar,
  btnLogout = true,
}) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const navToOnboarding = () => {
    return 'hi';
  };

  const handleLogout = () => {
    navigate('/logout', { replace: true });
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <div className="bg-white px-[50px] py-[50px] rounded-[8px]">
                    <Typography className=" font-bold" type="headlines">
                      ¿Estás seguro que deseas cerrar sesión?
                    </Typography>
                    <div className="flex mt-[30px] gap-[40px] justify-center">
                      <Button
                        height="h-[55px] w-[50%]"
                        onClick={handleLogout}
                        text="Sí, salir"
                        type="button"
                        variant="primary"
                      />
                    </div>
                    <div className="flex mt-[30px] gap-[40px] justify-center">
                      <Button
                        height="h-[55px] w-[50%]"
                        onClick={() => setShowModal(false)}
                        text="No, permanecer en DyP"
                        type="button"
                        variant="link"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div
        className={`${styles.container} ${
          display ? styles.display : ''
        } border border-[2px] shadow-xl `}
      >
        <div className={styles.top}>
          <button
            className={styles.closeButton}
            onClick={() => {
              return 'hi';
            }}
            type="button"
          >
            <IonIcon name="close" />
          </button>
          <div className="w-full bg-white">
            <div className={styles.logo}>
              <img alt="" height={250} src={LogoDyP} width={250} />
            </div>
          </div>
          <div className="mt-[20px]" />
          <NavButton
            active={true}
            iconName="person"
            onClick={navToOnboarding}
            text={titleSideBar ?? ''}
          />
        </div>
        <div className={styles.bottom}>
          <p className={styles.name}></p>
          <div className={`${styles.footer} !flex !items-center !w-full `}>
            {btnLogout ? (
              <button
                className={`${styles.button} ${styles.logout}`}
                onClick={() => setShowModal(true)}
                type="button"
              >
                <IonIcon className={styles.chatIcon} name="exit" />
                <p className={styles.textButton}>Cerrar Sesion</p>
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {display ? (
        <button
          aria-label="Scrim"
          className={styles.scrim}
          onClick={() => {
            return 'hi';
          }}
          type="button"
        />
      ) : null}
    </>
  );
};

export default SideBar;
