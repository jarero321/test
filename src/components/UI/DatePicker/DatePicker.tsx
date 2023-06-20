import styles from './styles.module.scss';
import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  selectedDate: Date;
  handleDateChange: (date: Date) => void;
  withPortal: boolean;
}

const DatePickerComponent: React.FC<Props> = ({
  selectedDate,
  handleDateChange,
}) => {
  const [startDate, setStartDate] = useState(selectedDate);

  const handleChange = (date: Date) => {
    setStartDate(date);
    handleDateChange(date);
  };

  const CustomDatePickerInput = React.forwardRef<HTMLInputElement, any>(
    ({ value, onClick }, ref) => (
      <button className={`${styles.input}`} onClick={onClick} ref={ref}>
        {value}
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
