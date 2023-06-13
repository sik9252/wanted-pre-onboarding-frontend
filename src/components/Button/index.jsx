import React from "react";
import { StyledButton } from "./style";

export const Button = ({ children, width, height, onClick }) => {
  return (
    <StyledButton width={width} height={height} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
