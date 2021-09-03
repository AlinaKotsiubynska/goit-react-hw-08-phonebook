import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from 'redux/thunks/authThunks';
import Button from 'components/shared/Button';
import Form from 'components/shared/Form/Form';

export default function RegisterPage() {
  const initialState = { name: '', email: '', password: '' };

  const [{ name, email, password }, setUser] = useState(initialState);
  const dispatch = useDispatch();

  const reset = () => {
    setUser(initialState);
  };
  const handleChange = ({ target: { name, value } }) => {
    setUser(prev => ({ ...prev, [name]: value }));
  };
  const handelSubmit = e => {
    e.preventDefault();
    dispatch(signUpUser({ name, email, password }));
    reset();
  };

  return (
    <>
      <Form name="user-data" onSubmit={handelSubmit}>
        <label>
          {' '}
          Name
          <input value={name} onChange={handleChange} type="text" name="name" />
        </label>
        <br />
        <label>
          {' '}
          Email
          <input
            value={email}
            onChange={handleChange}
            type="text"
            name="email"
          />
        </label>
        <br />
        <label>
          {' '}
          Password
          <input
            value={password}
            onChange={handleChange}
            type="text"
            name="password"
          />
        </label>
        <br />
        <Button type="submit">Sign up</Button>
      </Form>
    </>
  );
}
