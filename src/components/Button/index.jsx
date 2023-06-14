import React from "react";
import { StyledButton } from "./style";

export const Button = ({
  children,
  width,
  height,
  onClick,
  isAllValidateChecked,
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      onClick={onClick}
      disabled={isAllValidateChecked ? "" : "disabled"}
    >
      {children}
    </StyledButton>
  );
};
