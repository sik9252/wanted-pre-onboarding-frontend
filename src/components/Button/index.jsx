import React from "react";
import { StyledButton } from "./style";

export const Button = ({
  children,
  width,
  height,
  onClick,
  isAllValidateChecked,
  data_testid,
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      onClick={onClick}
      disabled={isAllValidateChecked ? "" : "disabled"}
      data-testid={data_testid}
    >
      {children}
    </StyledButton>
  );
};
