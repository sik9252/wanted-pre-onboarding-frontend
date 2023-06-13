import styled from "styled-components";
import COLOR from "../../styles/colors";

export const StyledInputBox = styled.input`
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : "58px")};
  border: none;
  padding: 10px;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  ::placeholder {
    color: ${COLOR.GREEN_9};
  }

  :focus {
    outline: none;
  }
`;
