import styles from './NavButton.module.scss';
import IonIcon from '@reacticons/ionicons';
import { ButtonHTMLAttributes } from 'react';

type CustomProps = {
  text: string;
  iconName: any;
  active: boolean;
  short?: boolean;
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & CustomProps;

const NavButton = ({
  text,
  active,
  iconName,
  short,
  ...buttonProps
}: Props) => (
  <button
    className={`${styles.button} ${short ? styles.short : ''}`}
    type="button"
    {...buttonProps}
  >
    <div className={`${styles.iconWrapper} ${active ? styles.active : ''}`}>
      <IonIcon className={styles.icon} name={iconName} />
    </div>
    {!short ? <p className={styles.text}>{text}</p> : null}
  </button>
);

NavButton.defaultProps = {
  short: false,
};

export default NavButton;
