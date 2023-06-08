import styles from './OptionRow.module.scss';
import IonIcon from '@reacticons/ionicons';

type Props = {
  text: string;
  count: number;
  maxCount: number;
  hrefId: string;
  active: boolean;
  counter?: boolean;
};

const OptionRow = ({ text, count, maxCount, active, counter }: Props) => {
  const done = count === maxCount;

  const handleOnClick = () => {
    return 'hi';
  };

  return (
    <button
      className={`${styles.container} ${active ? styles.active : ''}`}
      onClick={handleOnClick}
      type="button"
    >
      <div className={`${styles.indicator} ${active ? styles.active : ''}`} />
      <div className={styles.wrapper}>
        <p className={styles.text}>{text}</p>
        {counter && (
          <div className={styles.right}>
            <p className={styles.completeCounter}>
              {count}/{maxCount}
            </p>
            <div className={styles.iconWrapper}>
              {done ? <IonIcon name="checkmark" /> : null}
            </div>
          </div>
        )}
      </div>
    </button>
  );
};

export default OptionRow;
