import React from "react";
import { StyledInputBox } from "./style";

export const InputBox = ({ width, height, value, placeholder, onChange }) => {
  return (
    <StyledInputBox
      width={width}
      height={height}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
