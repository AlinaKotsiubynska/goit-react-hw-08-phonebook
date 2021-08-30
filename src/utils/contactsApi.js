import axios from 'axios';
// axios.defaults.baseURL = 'https://6115602d8f38520017a3849d.mockapi.io/';

export const getContactsAllFetch = async () => {
  const responce = await axios.get('/contacts');
  return responce.data;
};

export const deleteContactFetch = async id => {
  const responce = await axios.delete(`/contacts/${id}`);
  return responce.data;
};

export const addContactFetch = async contact => {
  const responce = await axios.post(`/contacts`, contact);
  return responce.data;
};
