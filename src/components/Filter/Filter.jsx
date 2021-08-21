import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/slices/filterSlice';
import { getFilter } from 'redux/selectors';
import s from './Filter.module.scss';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onInput = ({ target: { value } }) => dispatch(filterContacts(value));

  return (
    <>
      <label className={s.label}>
        {' '}
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="filter"
          value={filter}
          onInput={onInput}
        ></input>
      </label>
    </>
  );
}
