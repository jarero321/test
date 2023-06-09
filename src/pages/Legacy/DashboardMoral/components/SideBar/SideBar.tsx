import { NavButton } from './NavButton';
import { OptionRow } from './OptionRow';
import styles from './index.module.scss';
import LogoDyP from '@/resources/img/logo/logo.png';
import IonIcon from '@reacticons/ionicons';
import React from 'react';

interface InterfaceSideBar {
  display: boolean;
  titleSideBar?: string;
  options?: {
    active: boolean;
    count: number;
    hrefId: string;
    maxCount: number;
    text: string;
  }[];
}

const SideBar: React.FC<InterfaceSideBar> = ({
  display = true,
  titleSideBar,
  options,
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
          {options ? (
            options?.map((item) => (
              <>
                <OptionRow
                  active={item.active}
                  count={item.count}
                  hrefId={item.hrefId}
                  maxCount={item.maxCount}
                  text={item.text}
                />
              </>
            ))
          ) : (
            <>
              <OptionRow
                active={false}
                count={2}
                hrefId="logDataSection"
                maxCount={2}
                text="Datos de Registro"
              />
              <OptionRow
                active={false}
                count={0}
                hrefId="personalInfoSection"
                maxCount={0}
                text="Datos Personales"
              />
              <OptionRow
                active={false}
                count={0}
                hrefId="businessInfoSection"
                maxCount={0}
                text="Datos de su empresa"
              />
              <OptionRow
                active={false}
                count={0}
                hrefId="salesVolumeSection"
                maxCount={0}
                text="Volumen de Ventas"
              />
              <OptionRow
                active={false}
                count={0}
                hrefId="providersSection"
                maxCount={0}
                text="Servicios y Proveedores"
              />
              <OptionRow
                active={false}
                count={0}
                hrefId="uploadFilesSection"
                maxCount={0}
                text="Alta de archivos"
              />
            </>
          )}
        </div>
        <div className={styles.bottom}>
          <p className={styles.name}></p>
          <div className={styles.footer}>
            <button
              className={`${styles.button} ${styles.logout}`}
              onClick={handleLogout}
              type="button"
            >
              <IonIcon className={styles.chatIcon} name="exit" />
              <p className={styles.textButton}>Cerrar Sesion</p>
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

export default SideBar;
