import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRegister = async formData => {
  const { data } = await instance.post('/users/signup', formData);
  setToken(data.token);
  return data;
};

export const requestLogin = async formData => {
  const { data } = await instance.post('/users/login', formData);
  setToken(data.token);
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

export const fetchAllContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const fetchAddContacts = async newContacts => {
  const { data } = await instance.post('/contacts', newContacts);
  return data;
};

export const fetchDeleteContacts = async contactsId => {
  const { data } = await instance.delete(`/contacts/${contactsId}`);
  return data;
};
