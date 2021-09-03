import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiUser } from 'react-icons/fi';
import { getIsLoggedIn, getUserName } from 'redux/selectors';
import { logoutUser } from 'redux/thunks/authThunks';
import Button from 'components/shared/Button/Button';
import s from './UserMenu.module.scss';

export default function UserMenu() {
  const dispatch = useDispatch();

  const handelLogout = e => {
    dispatch(logoutUser());
  };
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
  return (
    <>
      <div className={s.userMenu}>
        {isLoggedIn ? (
          <>
            <FiUser />
            <p className={s.name}>{`Hello, ${userName}!`}</p>
            <Button type="button" onClick={handelLogout}>
              Sign out
            </Button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={s.link}
              activeClassName={s.linkActive}
            >
              Log in
            </NavLink>
            <NavLink
              to="/register"
              className={s.link}
              activeClassName={s.linkActive}
            >
              Sign up
            </NavLink>
          </>
        )}
      </div>
    </>
  );
}
