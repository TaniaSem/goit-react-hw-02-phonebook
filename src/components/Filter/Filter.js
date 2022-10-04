export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="filter">Find contact by name</label>
      <input type="text" id="filter" value={value} onChange={onChange} />
    </div>
  );
};
