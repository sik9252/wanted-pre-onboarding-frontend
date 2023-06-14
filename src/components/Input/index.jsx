import React from "react";
import { StyledInputBox } from "./style";

export const Input = ({ type, value, placeholder, onChange }) => {
  return (
    <StyledInputBox
      type={type ? type : "text"}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
