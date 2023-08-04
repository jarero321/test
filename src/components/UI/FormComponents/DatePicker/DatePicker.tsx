import styles from './styles.module.scss';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Typography } from '../../Texts/Typography';

interface Props {
  selectedDate: Date;
  // eslint-disable-next-line no-unused-vars
  handleDateChange: (date: Date) => void;
}

const DatePickerComponent: React.FC<Props> = ({
  selectedDate,
  handleDateChange,
}) => {
  const CustomDatePickerInput = React.forwardRef<HTMLInputElement, any>(
    ({ value, onClick }) => (
      <button
        className={`${styles.input} font-helveticaBold`}
        onClick={onClick}
      >
        <Typography colors="black" size="extraSmall-size">
          {value}
        </Typography>
      </button>
    )
  );

  return (
    <>
      <label className={`${styles.container}`}>
        <div className={`${styles.wrapper}`}>
          <DatePicker
            customInput={<CustomDatePickerInput />}
            dateFormat="dd/MM/yyyy"
            onChange={handleDateChange}
            selected={selectedDate}
            showYearDropdown
          />
        </div>
      </label>
    </>
  );
};

export default DatePickerComponent;
