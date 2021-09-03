import axios from 'axios';

export const getContactsAllFetch = async () => {
  const responce = await axios.get('/contacts');
  return responce.data;
};

export const deleteContactFetch = async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
};

export const addContactFetch = async contact => {
  const responce = await axios.post(`/contacts`, contact);
  return responce.data;
};

export const editContactFetch = async contact => {
  const responce = await axios.post(`/contacts/${contact.id}`, contact);
  return responce.data;
};
