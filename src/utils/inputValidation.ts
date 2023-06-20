import { TypeWithKey } from '@/models/type-with-key';

export const inputValidation = (
  type: string,
  required: boolean
): TypeWithKey<string> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const optionsType: TypeWithKey<any> = {
    default: {},
    text: {
      required: { value: required, message: 'Campo obligatorio' },
    },
    email: {
      required: { value: required, message: 'Campo obligatorio' },
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,
        message: 'Introduce un email valido',
      },
    },
    password: {
      required: { value: required, message: 'Campo obligatorio' },
      validate: (value: string) => {
        if (
          !value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
        ) {
          return 'La contraseña debe contener al menos una letra en mayúscula, una letra en minúscula y un número';
        }
        return true;
      },
    },
    confirmPassword: {
      required: { value: required, message: 'Campo obligatorio' },
      validate: (value: string, allValues: any) => {
        if (value !== allValues.password) {
          return 'Las contraseñas no coinciden';
        }
        return true;
      },
    },
  };
  return optionsType[type] || optionsType.default;
};
