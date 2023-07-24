import { MessageError } from './components/MessageError';
import styles from './styles.module.scss';
import IonIcon from '@reacticons/ionicons';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { validationSchema } from './inputPassword.resolver';

interface InputFormProps {
  name: string;
  className?: string;
  placeholder?: string;
  label?: string;
  type?: 'text' | 'password' | 'email';
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
  inputMode = 'text',
  className = '',
  min,
  max,
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
            maxLength={max}
            minLength={min}
            placeholder={placeholder}
            type={type === 'password' ? validateTypePassword() : type}
            {...register(name, {
              validate: async (value) => {
                try {
                  await validationSchema.validateAt('password', {
                    password: value,
                  });
                  return true; // La validación pasó
                } catch (error: any) {
                  return error.message; // La validación falló, retornamos el mensaje de error
                }
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
