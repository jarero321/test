import { RegisterUser } from '@/models/authentication/authentication.models';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const createUser = (data: RegisterUser) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${apiUrl}/users/create_user`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { createUser };
