import React from "react";
import "../../common/components.css";

const OfferInput = ({
  type,
  name,
  value,
  handleChange,
  className,
  placeholder,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      className={className}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default OfferInput;
