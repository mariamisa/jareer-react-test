import React from "react";

export default function Button({
  handelClick,
  btnName,
  children,
  type,
  ...otherProps
}) {
  return (
    <button onClick={handelClick} name={btnName} type={type} {...otherProps}>
      {children}
    </button>
  );
}
