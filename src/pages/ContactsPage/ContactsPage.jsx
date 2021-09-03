import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiUserPlus, FiUsers } from 'react-icons/fi';
import { getContacts } from 'redux/selectors';
import { getContactsAll } from 'redux/thunks/contactsThunks';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import s from 'components/App/App.module.scss';

export default function ContactsPage() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getContactsAll()), [dispatch]);
  return (
    <>
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
    </>
  );
}
