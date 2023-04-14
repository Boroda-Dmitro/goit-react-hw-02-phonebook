export const Filter = ({ handleChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="tel" name="filter" onChange={handleChange} />
    </label>
  );
};
