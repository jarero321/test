import { MessageError } from './MessageError';
import styles from './styles.module.scss';
import { inputValidation } from '@/utils';
import IonIcon from '@reacticons/ionicons';
import React, { useState } from 'react';
import {
  useFormContext,
  RegisterOptions,
  UseFormRegister,
  FieldError,
} from 'react-hook-form';

interface InputFormProps {
  name: string;
  className?: string;
  placeholder?: string;
  label?: string;
  type?: 'text' | 'password' | 'email';
  required?: boolean;
  register?: UseFormRegister<any>;
  id: string;
  error?: FieldError;
  inputMode?: 'email' | 'text' | 'password';
  validate?: RegisterOptions['validate'];
}

const InputForm: React.FC<InputFormProps> = ({
  name,
  label,
  placeholder,
  type = 'text',
  // register,
  required = false,
  inputMode = 'text',
  id,
  className = '',
  // validate,
  // error,
}) => {
  const methods = useFormContext();
  const [showVisibility, setShowVisibility] = useState(true);

  const toggleVisibility = () => {
    setShowVisibility(!showVisibility);
  };

  const validateTypePassword = () => {
    return !showVisibility ? 'text' : 'password';
  };
  const {
    formState: { errors },
    getValues,
    register,
  } = methods;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            <label htmlFor={id}>{label}</label>
          </span>
          <input
            className={styles.input}
            id={id}
            inputMode={inputMode}
            placeholder={placeholder}
            type={type === 'password' ? validateTypePassword() : type}
            {...register(id, inputValidation(name, required))}
            formNoValidate
          />
          {type === 'password' ? (
            <button
              className={styles.visibilityButton}
              onClick={toggleVisibility}
              type="submit"
            >
              {showVisibility ? (
                <IonIcon name="eye" />
              ) : (
                <IonIcon name="eye-off" />
              )}
            </button>
          ) : null}
        </div>
      </label>
      {isError(errors) && (
        <MessageError message={errors[name]?.message as string} />
      )}
    </>
  );
};

export default InputForm;
