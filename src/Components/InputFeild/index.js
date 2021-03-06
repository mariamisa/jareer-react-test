import React from "react";

export default function Input({
  handelChange,
  inputName,
  placeholder,
  type,
  value,
  ...otherProps
}) {
  return (
    <input
      onChange={handelChange}
      placeholder={placeholder}
      value={value}
      type={type}
      name={inputName}
      {...otherProps}
    />
  );
}
