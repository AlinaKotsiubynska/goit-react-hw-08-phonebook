import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/thunks/contactsThunks';
import { getContacts, getFilter, getLoading } from 'redux/selectors';
import { filterToMatch, notify } from 'utils';
import Contact from 'components/Contact';
import s from './ContactList.module.scss';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();
  const onContactDelete = id => dispatch(deleteContact(id));

  const onDeleteHandler = ({ target }) => {
    const contact = target.closest('li');
    const contactName = contact.firstChild.textContent;
    onContactDelete(contact.id);
    notify.removed(contactName);
  };

  const filteredContacts = useMemo(
    () => filterToMatch(contacts, filter),
    [contacts, filter],
  );

  if (!contacts.length) {
    if (isLoading) {
      return <p>...</p>;
    } else {
      return <p>Your contact list is empty</p>;
    }
  }

  if (!filteredContacts.length) {
    return <p>Contact not found</p>;
  }
  return (
    <ul className={s.contacts}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          phone={number}
          onClick={onDeleteHandler}
        />
      ))}
    </ul>
  );
}
