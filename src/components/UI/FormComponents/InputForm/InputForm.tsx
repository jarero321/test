import CalendarIcon from '@/resources/icons/CalendarIcon';
import { MessageError } from './components/MessageError';
import styles from './styles.module.scss';
import { inputValidation } from '@/utils';
import { Typography } from '@/components';
import IonIcon from '@reacticons/ionicons';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ClockIcon from '@/resources/icons/ClockIcon';

interface InputFormProps {
  name: string;
  className?: string;
  placeholder?: string;
  label?: string;
  type?: 'text' | 'password' | 'email' | 'calendar' | 'clock';
  required?: boolean;
  inputMode?: 'email' | 'text';
  rules?: string;
  min?: number;
  max?: number;
}

const InputForm: React.FC<InputFormProps> = ({
  name,
  label,
  placeholder,
  type = 'text',
  required = false,
  inputMode = 'text',
  className = '',
  rules = inputMode,
  min,
  max,
}) => {
  const [showVisibility, setShowVisibility] = useState(true);

  const toggleVisibility = () => {
    setShowVisibility(!showVisibility);
  };

  const validateTypePassword = () => {
    return !showVisibility ? 'text' : 'password';
  };
  const {
    register,
    formState: { errors },
    getValues,
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isError = (errors: any): boolean => {
    return Boolean(errors && errors[name]);
  };

  const valueInput = (name: string) => {
    return getValues(name);
  };

  return (
    <>
      <label className={`${styles.container}`}>
        <div
          className={`${styles.wrapper} ${className} ${
            isError(errors) ? styles.error : ''
          }`}
        >
          {label !== '' && (
            <Typography
              className={`font-helveticaBold ${styles.inputTitle} ${
                valueInput(name) ? styles.withValue : ''
              }`}
              colors="black"
              size="text-sm"
            >
              {label}
            </Typography>
          )}
          <input
            className={styles.input}
            inputMode={inputMode}
            maxLength={max}
            minLength={min}
            placeholder={placeholder}
            type={type === 'password' ? validateTypePassword() : type}
            {...register(name, inputValidation(rules, required))}
            formNoValidate
          />
          {type === 'password' ? (
            <button
              className={styles.visibilityButton}
              onClick={toggleVisibility}
              type="button"
            >
              {showVisibility ? (
                <IonIcon name="eye" />
              ) : (
                <IonIcon name="eye-off" />
              )}
            </button>
          ) : null}
          {type === 'calendar' ? <CalendarIcon className="w-6 h-6" /> : null}
          {type === 'clock' ? <ClockIcon className="w-6 h-6" /> : null}
        </div>
      </label>
      {isError(errors) && (
        <MessageError message={errors[name]?.message as string} />
      )}
    </>
  );
};

export default InputForm;
