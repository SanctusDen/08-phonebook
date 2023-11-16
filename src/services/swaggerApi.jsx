import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  headers: { Authorization: 'Bearer' },
});

export const requestRegister = async formData => {
  const { data } = await instance.post('/users/signup', formData);
  return data;
};

export const requestLogin = async formData => {
  const { data } = await instance.post('/users/login', formData);
  return data;
};

export const requestLogout = async () => {
  const { data } = await instance.post('/users/logout');
  return data;
};

export const requestRefreshUser = async () => {
  const { data } = await instance.get('/users/current');
  return data;
};
