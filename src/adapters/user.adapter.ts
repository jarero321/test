import { IResponseToken, Tokens } from '@/models';

const userTokenAdapter = (tokens: IResponseToken): Tokens => {
  const { access, refresh } = tokens;
  return {
    tokens: {
      access_token: access,
      refresh_token: refresh,
    },
  };
};

export { userTokenAdapter };
