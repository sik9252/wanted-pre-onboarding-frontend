import styled from "styled-components";
import COLOR from "../../styles/colors";

export const SignUpContainer = styled.div`
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  color: ${COLOR.GREEN_9};
`;

export const InputBox = styled.div`
  & > div {
    margin: 5px 0;
  }
`;

export const ButtonBox = styled.div`
  text-align: center;
  margin-top: 20px;
`;
