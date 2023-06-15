import styled from "styled-components";
import COLOR from "../../styles/colors";

export const TodoContainer = styled.div`
  width: 800px;
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
  display: flex;
  margin-bottom: 40px;

  & > button {
    margin-left: 10px;
  }
`;

export const TodoListBox = styled.div`
  list-style: none;

  & > li {
    display: flex;
    margin: 20px 0;

    & > label {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;

      & > input {
        cursor: pointer;
      }

      & > span {
        width: 91%;
        padding-left: 10px;
      }
    }
  }
`;

export const TodoOption = styled.div`
  display: flex;

  & > button {
    :nth-child(1) {
      margin-right: 5px;
    }
  }
`;
