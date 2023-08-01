import * as yup from 'yup';

const consecutiveCharacters = (password: string) => {
  return /^(?=(?:.*[a-zA-Z0-9]){6})/.test(password);
};

const forbiddenPasswords = (password: string) => {
  const forbiddenList = [
    '@',
    'DyP',
    /(.)\1{2,}/,
    /(012|123|234|345|456|567|678|789|987|876|765|654|543|432|321|210)/,
  ];

  return !forbiddenList.some((pattern) => password.match(pattern));
};

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required('La contraseña es requerida')
    .min(6, 'La contraseña debe de tener mas de 6 caracteres')
    .test(
      'consecutive-characters',
      'La contraseña debe caracteres alfanuméricos consecutivos',
      consecutiveCharacters
    )
    .test(
      'forbidden-password',
      'La contraseña no debe de tener el correo electronico o algun dato sensible, mas de 3 caracteres identicos de forma consecutiva y/o secuencial',
      forbiddenPasswords
    ),
});

export { validationSchema };
