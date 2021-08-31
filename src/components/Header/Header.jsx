import { FiBookOpen } from 'react-icons/fi';
import UserMenu from 'components/UserMenu/UserMenu';

import s from './Header.module.scss';

export default function Header() {
  return (
    <>
      <header className={s.header}>
        <div className={s.logo}>
          <FiBookOpen />
          <h1 className={s.title}> Phonebook</h1>
        </div>
        <UserMenu />
      </header>
    </>
  );
}
