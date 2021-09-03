import PropTypes from 'prop-types';
import Button from 'components/shared/Button';
import s from './Contact.module.scss';

export default function Contact({ id, name, phone, onClick }) {
  return (
    <li className={s.contact} id={id}>
      <span>{name}</span>
      <span>{phone}</span>
      <Button type="button" onClick={onClick}>
        Delete
      </Button>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
