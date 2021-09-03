import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const currentGet = async token => {
  try {
    const responce = await axios.get('/users/current', {
      headers: { Authorization: token },
    });
    axios.defaults.headers.common.Authorization = token;
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const logoutPost = async () => {
  try {
    const responce = await axios.post('/users/logout');
    axios.defaults.headers.common.Authorization = '';
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const signUpPost = async userObj => {
  try {
    const responce = await axios.post('/users/signup', userObj);
    axios.defaults.headers.common.Authorization = responce.data.token;
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const loginPost = async userObj => {
  try {
    const responce = await axios.post('/users/login', userObj);
    axios.defaults.headers.common.Authorization = responce.data.token;
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};
