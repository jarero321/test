import { IResponseToken, UserCredentials } from '@/models';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const signIn = (userCredentials: UserCredentials): Promise<IResponseToken> => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/api/token/`, userCredentials)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { signIn };
