import styled from "styled-components";
import COLOR from "../../styles/colors";

export const StyledButton = styled.button`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: ${COLOR.GREEN_7};
  color: ${COLOR.WHITE};
  border-radius: 7px;
  border: none;
  font-size: 17px;
  letter-spacing: 0.6px;

  :hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: ${COLOR.GREEN_6};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background: ${COLOR.GRAY};
  }
`;
