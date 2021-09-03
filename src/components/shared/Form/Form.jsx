import s from './Form.module.scss';
import PropTypes from 'prop-types';

export default function Form({ onSubmit, name, children }) {
  return (
    <>
      <form name={name} onSubmit={onSubmit} className={s.form}>
        {children}
      </form>
    </>
  );
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
