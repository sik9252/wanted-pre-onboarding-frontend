import React from "react";
import { StyledInputBox } from "./style";

export const Input = ({ type, value, defaultValue, placeholder, onChange }) => {
  return (
    <StyledInputBox
      type={type ? type : "text"}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
