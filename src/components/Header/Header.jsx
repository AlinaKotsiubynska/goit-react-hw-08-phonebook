import { NavLink } from 'react-router-dom';
import { logoutUser } from 'redux/thunks/authThunks';
import { useDispatch } from 'react-redux';
import { FiBookOpen } from 'react-icons/fi';
import Button from 'components/Button/Button';
import s from './Header.module.scss';

export default function Header() {
  const dispatch = useDispatch();
  const handelLogout = e => {
    console.log(e);
    dispatch(logoutUser());
  };
  return (
    <header>
      <div className={s.header}>
        <FiBookOpen />
        <h1 className={s.title}> Phonebook</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/login" activeStyle={{ color: 'green' }}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" activeStyle={{ color: 'green' }}>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" activeStyle={{ color: 'green' }}>
            Contacts
          </NavLink>
        </li>
      </ul>
      <Button type="button" onClick={handelLogout}>
        Logout
      </Button>
    </header>
  );
}
