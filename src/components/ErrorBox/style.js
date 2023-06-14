import styled, { css } from "styled-components";
import COLOR from "../../styles/colors";

export const StyledErrorBox = styled.div`
  display: none;
  font-size: 13px;
  color: ${COLOR.RED};
  padding-bottom: 3px;

  ${({ isValidatedEmail }) =>
    !isValidatedEmail
      ? css`
          display: block;
        `
      : null}
  ${({ isValidatedPassword }) =>
    !isValidatedPassword
      ? css`
          display: block;
        `
      : null}
`;
