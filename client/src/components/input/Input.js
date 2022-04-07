const Input = ({ type, name, value, handleChange, labelText }) => {
  return (
    <input
      type={type}
      name={name}
      className="input large-input"
      placeholder={labelText || name}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
