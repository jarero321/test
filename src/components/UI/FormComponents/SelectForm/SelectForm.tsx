import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { MessageError } from '../InputForm/components/MessageError';
import Select from 'react-select';
import styles from './styles.module.scss';

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
    control,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isError = (errors: any): boolean => {
    return Boolean(errors && errors[name]);
  };

  const customStyles = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: (provided: any, state: any) => ({
      ...provided,
      borderRadius: '8px',
      backgroundColor: state.isFocused ? '#F3F4F6' : '#F3F4F6',
      height: '50px',
      boxShadow: state.isFocused
        ? '0 0 0 2px #fff, 0 0 0 0px #38144f'
        : provided.boxShadow,
      outline: 'none',
      border: !isError(errors)
        ? state.isFocused
          ? ' 2px solid #38144f'
          : 'none'
        : '1px solid red',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
  };
  return (
    <>
      <label className={`${styles.container} ${className}`}>
        <span className={`${styles.inputTitle}`}>{label}</span>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Select
              options={options}
              placeholder={placeholder}
              {...field}
              styles={customStyles}
            />
          )}
          rules={{
            required: { value: required, message: 'Campo obligatorio' },
          }}
        />
      </label>
      {isError(errors) && (
        <MessageError message={errors[name]?.message as string} />
      )}
    </>
  );
};

export default SelectForm;
