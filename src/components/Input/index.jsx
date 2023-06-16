import React from "react";
import { StyledInputBox } from "./style";

export const Input = ({
  type,
  value,
  defaultValue,
  placeholder,
  onChange,
  data_testid,
}) => {
  return (
    <StyledInputBox
      type={type ? type : "text"}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      data-testid={data_testid}
    />
  );
};
