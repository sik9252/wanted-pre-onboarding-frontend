import React from "react";
import { StyledErrorBox } from "./style";

export const ErrorBox = ({
  isValidatedEmail,
  isValidatedPassword,
  errorMessage,
}) => {
  return (
    <StyledErrorBox
      isValidatedEmail={isValidatedEmail}
      isValidatedPassword={isValidatedPassword}
    >
      {errorMessage}
    </StyledErrorBox>
  );
};
