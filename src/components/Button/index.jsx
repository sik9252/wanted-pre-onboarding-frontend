import React from "react";
import { StyledButton } from "./style";

export const Button = ({ children, width, height, onClick, isDisabled }) => {
  return (
    <StyledButton
      width={width}
      height={height}
      onClick={onClick}
      disabled={isDisabled ? "disabled" : ""}
    >
      {children}
    </StyledButton>
  );
};
