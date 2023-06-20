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
    curp: {
      required: { value: required, message: 'Campo obligatorio' },
      pattern: {
        value:
          /^([A-Z&]|[a-z&]{1})([AEIOU]|[aeiou]{1})([A-Z&]|[a-z&]{1})([A-Z&]|[a-z&]{1})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([HM]|[hm]{1})([AS|as|BC|bc|BS|bs|CC|cc|CS|cs|CH|ch|CL|cl|CM|cm|DF|df|DG|dg|GT|gt|GR|gr|HG|hg|JC|jc|MC|mc|MN|mn|MS|ms|NT|nt|NL|nl|OC|oc|PL|pl|QT|qt|QR|qr|SP|sp|SL|sl|SR|sr|TC|tc|TS|ts|TL|tl|VZ|vz|YN|yn|ZS|zs|NE|ne]{2})([^A|a|E|e|I|i|O|o|U|u]{1})([^A|a|E|e|I|i|O|o|U|u]{1})([^A|a|E|e|I|i|O|o|U|u]{1})([0-9]{2})$/,
        message: 'CURP invalida',
      },
    },
    rfc: {
      required: { value: required, message: 'Campo obligatorio' },
      pattern: {
        value:
          /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z\d]{3}))?$/,
        message: 'RFC invalido',
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
  };
  return optionsType[type] || optionsType.default;
};
