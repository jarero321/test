import { MessageError } from './MessageError';
import styles from './styles.module.scss';
import { inputValidation } from '@/utils';
import IonIcon from '@reacticons/ionicons';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputFormProps {
  name: string;
  className?: string;
  placeholder?: string;
  label?: string;
  type?: 'text' | 'password' | 'email';
  required?: boolean;
  inputMode?: 'email' | 'text';
}

const InputForm: React.FC<InputFormProps> = ({
  name,
  label,
  placeholder,
  type = 'text',
  required = false,
  inputMode = 'text',
  className = '',
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
    register,
    formState: { errors },
    getValues,
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
            {label}
          </span>
          <input
            className={styles.input}
            inputMode={inputMode}
            placeholder={placeholder}
            type={type === 'password' ? validateTypePassword() : type}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                message:
                  'Password must contain at least one uppercase letter, one lowercase letter, and one number',
              },
            })}
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
        </div>
      </label>
      {isError(errors) && (
        <MessageError message={errors[name]?.message as string} />
      )}
    </>
  );
};

export default InputForm;
