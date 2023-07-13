import styles from './checkbox.module.scss';
import IonIcon from '@reacticons/ionicons';
import { useEffect, useState } from 'react';

export type Props = {
  name?: string;
  checked?: boolean;
  className?: string;
  bubbleClickToParent?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (name: string, checked: boolean) => void;
};

const CheckBox = ({
  name,
  checked,
  className,
  bubbleClickToParent,
  onChange,
}: Props) => {
  const [_checked, setChecked] = useState(!!checked);

  const handleClick = () => {
    const newChecked = !_checked;

    if (onChange) {
      onChange(name || '', newChecked);
    }
    if (checked === undefined) {
      setChecked(newChecked);
    }
  };

  useEffect(() => {
    setChecked(!!checked);
  }, [checked]);

  return !bubbleClickToParent ? (
    <button
      className={`${styles.container} ${className} ${
        _checked ? styles.checked : ''
      }`}
      onClick={handleClick}
      type="button"
    >
      <div className={`${styles.inner} ${_checked ? styles.checked : ''}`} />
      <IonIcon
        className={`${styles.icon} ${_checked ? styles.checked : ''}`}
        name="checkmark"
      />
    </button>
  ) : (
    <div
      className={`${styles.container} ${className} ${
        _checked ? styles.checked : ''
      }`}
    >
      <div className={`${styles.inner} ${_checked ? styles.checked : ''}`} />
      <IonIcon
        className={`${styles.icon} ${_checked ? styles.checked : ''}`}
        name="checkmark"
      />
    </div>
  );
};

export default CheckBox;
