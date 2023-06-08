import styles from '../index.module.scss';
import { NavButton, OptionRow } from '@/components';
import LogoDyP from '@/resources/img/logo/logo.png';
import IonIcon from '@reacticons/ionicons';
import React from 'react';

interface SideBarProps {
  display: boolean;
  titleSideBar: string;
}

const PhysicPersonSideBar: React.FC<SideBarProps> = ({
  display,
  titleSideBar,
}) => {
  const navToOnboarding = () => {
    return 'hi';
  };

  const handleLogout = () => {
    return 'hi';
  };

  return (
    <>
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
          <OptionRow
            active={false}
            count={10}
            hrefId="logDataSection"
            maxCount={10}
            text="Datos personales"
          />
          <OptionRow
            active={false}
            count={0}
            hrefId="personalInfoSection"
            maxCount={9}
            text="Domicilio"
          />
          {/* <OptionRow
            active={false}
            count={0}
            hrefId="businessInfoSection"
            maxCount={8}
            text="Otros datos personales"
          /> */}
          <OptionRow
            active={false}
            count={0}
            hrefId="salesVolumeSection"
            maxCount={12}
            text="Perfil transaccional"
          />
        </div>
        <div className={styles.bottom}>
          <p className={styles.name}></p>
          <div className="w-full flex px-[16px] items-center justify-between gap-[10px]">
            <button
              className={`${styles.button} ${styles.logout}`}
              onClick={handleLogout}
              type="button"
            >
              <IonIcon className={styles.chatIcon} name="exit" />
              <p className={styles.textButton}>Cerrar sesión</p>
            </button>
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

export default PhysicPersonSideBar;
