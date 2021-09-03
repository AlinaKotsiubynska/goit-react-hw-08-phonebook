import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { notify, isNameUnique } from 'utils';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/thunks/contactsThunks';
import Button from 'components/shared/Button';
import Form from 'components/shared/Form/Form';

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const saveContact = contact => dispatch(addContact(contact));

  const initialState = { contactName: '', contactNumber: '' };

  const [{ contactName, contactNumber }, setContact] = useState(initialState);

  useEffect(() => {}, [contacts]);

  const handleChange = ({ target: { name, value } }) => {
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setContact(initialState);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    if (isNameUnique(contacts, contactName)) {
      saveContact({ name: contactName, number: contactNumber });
      reset();
    } else {
      notify.error(contactName);
    }
  };

  return (
    <Form onSubmit={handlerSubmit} name={'newContact'}>
      <label>
        Name
        <input
          required
          type="text"
          value={contactName}
          onChange={handleChange}
          name="contactName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        />
      </label>

      <label>
        Number
        <input
          required
          type="tel"
          value={contactNumber}
          onChange={handleChange}
          name="contactNumber"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
      </label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
}
