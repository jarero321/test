import { IResponseToken, Tokens } from '@/models';
import { RegisterUser } from '@/models/authentication/authentication.models';
import { FormDataRegister } from '@/models/authentication/forms/forms.models';

const createUserAdapter = (
  data: FormDataRegister,
  position: number[]
): RegisterUser => {
  return {
    location: position,
    location_date: new Date(),
    email: data.email,
    password: data.password,
    id: 1,
    username: data.email,
    is_staff: false,
    is_customer: false,
    is_persona_fisica: false,
    is_persona_moral: false,
  };
};

const userTokenAdapter = (tokens: IResponseToken): Tokens => {
  const { access, refresh } = tokens;
  return {
    tokens: {
      access_token: access,
      refresh_token: refresh,
    },
  };
};

export { userTokenAdapter, createUserAdapter };
