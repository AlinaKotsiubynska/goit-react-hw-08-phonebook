import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { FiUserPlus, FiUsers, FiBookOpen } from 'react-icons/fi';
import { getContacts } from 'redux/selectors';
import { getContactsAll } from 'redux/thunks/contactsThunks';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import s from './App.module.scss';

export default function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getContactsAll()), [dispatch]);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <FiBookOpen />
        <h1 className={s.title}> Phonebook</h1>
      </div>

      <div className={s.content}>
        <section className={s.newContact}>
          <h2>
            <FiUserPlus /> New contact
          </h2>
          <ContactForm />
        </section>

        <section className={s.contacts}>
          <h2>
            <FiUsers /> Contacts
          </h2>
          {contacts.length > 0 && <Filter />}
          <ContactList />
        </section>
      </div>

      <Toaster />
    </div>
  );
}
