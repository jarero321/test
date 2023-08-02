import styles from './checkbox.module.scss';
import IonIcon from '@reacticons/ionicons';
import { useEffect, useState } from 'react';
import { Typography } from '../../Texts/Typography';

export type Props = {
  name?: string;
  checked?: boolean;
  className?: string;
  label?: string;
  bubbleClickToParent?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (name: string, checked: boolean) => void;
};

const CheckBox = ({
  name,
  checked,
  className,
  label,
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
    <div onClick={handleClick}>
      <div className="cursor-pointer min-w-[24px] flex items-center justify-center gap-[20px]">
        <button
          className={`${styles.container} ${className} ${
            _checked ? styles.checked : ''
          }`}
          type="button"
        >
          <div
            className={`${styles.inner} ${_checked ? styles.checked : ''}`}
          />
          <IonIcon
            className={`${styles.icon} ${_checked ? styles.checked : ''}`}
            name="checkmark"
          />
        </button>
        <Typography size="extraSmall-size"> {label} </Typography>
      </div>
    </div>
  ) : (
    <div>
      <div className="min-w-[24px] flex items-center justify-center gap-[20px]">
        <div
          className={`${styles.container} ${className} ${
            _checked ? styles.checked : ''
          }`}
        >
          <div
            className={`${styles.inner} ${_checked ? styles.checked : ''}`}
          />
          <IonIcon
            className={`${styles.icon} ${_checked ? styles.checked : ''}`}
            name="checkmark"
          />
        </div>
        <Typography size="extraSmall-size"> {label} </Typography>
      </div>
    </div>
  );
};

export default CheckBox;
