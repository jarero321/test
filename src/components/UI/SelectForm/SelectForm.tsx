import styles from './styles.module.scss';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { MessageError } from '../InputForm/MessageError';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFormProps {
  name: string;
  className?: string;
  label?: string;
  options: SelectOption[];
  required?: boolean;
  placeholder?: string;
}

const SelectForm: React.FC<SelectFormProps> = ({
  name,
  label,
  options,
  required = false,
  className = '',
  placeholder = '',
}) => {
  const methods = useFormContext();
  const {
    register,
    formState: { errors },
    getValues,
  } = methods;

  const isError = (errors: any): boolean => {
    return Boolean(errors && errors[name]);
  };

  const valueInput = (name: string) => {
    return getValues(name);
  };

  return (
    <>
      <label className={`${styles.container} ${className}`}>
        <div
          className={`${styles.wrapper} ${isError(errors) ? styles.error : ''}`}
        >
          <span
            className={`${styles.inputTitle} ${
              valueInput(name) ? styles.withValue : ''
            }`}
          >
            {label}
          </span>
          <select className={styles.input} {...register(name, { required })}>
            {placeholder && (
              <option
                className="color-[#BDBDBD]"
                disabled
                hidden
                selected
                value=""
              >
                {placeholder}
              </option>
            )}
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </label>
      {isError(errors) && (
        <MessageError message={errors[name]?.message as string} />
      )}
    </>
  );
};

export default SelectForm;
