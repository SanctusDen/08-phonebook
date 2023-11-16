import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://653bb1be2e42fd0d54d587a2.mockapi.io',
});

export const fetchAllContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};

export const fetchAddContacts = async newContacts => {
  const { data } = await contactsInstance.post('/contacts', newContacts);
  return data;
};

export const fetchDeleteContacts = async contactsId => {
  const { data } = await contactsInstance.delete(`/contacts/${contactsId}`);
  return data;
};
