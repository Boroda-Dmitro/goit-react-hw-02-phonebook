import PropTypes from 'prop-types';
import css from './Filter.module.css'

export const Filter = ({ handleChange }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input type="tel" name="filter" onChange={handleChange} className={css.input}/>
    </label>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
