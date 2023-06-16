import axios from 'axios';

type UserCredentials = {
  email: string;
  password: string;
};

const BASE_URL = 'http://localhost:5000/api/v1/user';

export const registerUser = async (userData: UserCredentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (loginData: UserCredentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
