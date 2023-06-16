import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/** styles */
import {
  TodoContainer,
  Title,
  InputBox,
  TodoListBox,
  TodoOption,
} from "./style";

/** components */
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

/** axios */
import {
  todoListRequest,
  createTodoRequest,
  updateTodoRequest,
  deleteTodoRequest,
} from "../../utils/axiosManage/TodoAxios";

/** other utils */
import { checkAuth } from "../../utils/AuthManage";

function Todo() {
  const navigate = useNavigate();

  // 로그인된 상태인지 검사
  useEffect(() => {
    if (!checkAuth()) {
      navigate("/signin");
    }
  }, []);

  // 할 일 목록 요청 후 상태에 저장
  const [todoListData, setTodoListData] = useState([]);

  const getTodoRequest = () => {
    todoListRequest()
      .then((res) => {
        setTodoListData(res.data);
      })
      .catch((err) => {
        if (err.response.data.statusCode === 401) {
          navigate("/signin");
        } else {
          alert(err.response.data.message);
        }
      });
  };

  useEffect(() => {
    getTodoRequest();
  }, []);

  /* 1-1. todo 입력받기 */
  const [todo, setTodo] = useState("");
  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  /* 1-2. todo 추가 버튼 클릭하는 경우 */
  const clickAddTodoButton = () => {
    const todoData = {
      todo: todo,
    };

    createTodoRequest(todoData)
      .then((res) => {
        setTodo("");
        getTodoRequest();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  /* 2. todo 체크박스 클릭하는 경우 */
  const clickCheckBox = (todo) => {
    const todoData = {
      todo: todo.todo,
      isCompleted: !todo.isCompleted,
    };

    updateTodoRequest(todo.id, todoData).then((res) => {
      getTodoRequest();
    });
  };

  /* 3-1. 수정 버튼을 클릭하는 경우 */
  // 수정 버튼을 클릭한 todo 요소인지 판단하기 위한 배열
  const [clickedModifyArray, setClickedModifyArray] = useState(
    Array(todoListData.length).fill(false)
  );
  // 새로운 todo가 입력되어 있는 배열
  const [newTodo, setNewTodo] = useState(Array(todoListData.length).fill(""));

  const clickModifyButton = (todo, index) => {
    const newTodoArray = [...clickedModifyArray];
    newTodoArray[index] = true;
    setClickedModifyArray(newTodoArray);

    const newTodoData = [...newTodo];
    newTodoData[index] = todo;
    setNewTodo(newTodoData);
  };

  /* 3-2. 수정 버튼을 클릭하고 새로운 todo를 입력받기 */
  const onChangeNewTodo = (e, index) => {
    const newTodoData = [...newTodo];
    newTodoData[index] = e.target.value;
    setNewTodo(newTodoData);
  };

  /* 3-3. 수정 모드에서 제출 버튼 클릭하는 경우 */
  const clickUpdateButton = (todo, index) => {
    const todoData = {
      todo: newTodo[index],
      isCompleted: todo.isCompleted,
    };

    updateTodoRequest(todo.id, todoData).then((res) => {
      getTodoRequest();

      const newTodoArray = [...clickedModifyArray];
      newTodoArray[index] = false;
      setClickedModifyArray(newTodoArray);
    });
  };

  /* 3-4. 수정 모드에서 취소 버튼 클릭하는 경우 */
  const clickCancelButton = (index) => {
    const newTodoArray = [...clickedModifyArray];
    newTodoArray[index] = false;
    setClickedModifyArray(newTodoArray);
  };

  /* 4. 삭제 버튼 클릭하는 경우 */
  const clickDeleteButton = (todoId) => {
    deleteTodoRequest(todoId)
      .then((res) => {
        getTodoRequest();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <TodoContainer>
      <Title>TODO 리스트</Title>
      <InputBox>
        <Input
          data-testid="new-todo-input"
          value={todo}
          placeholder={"할 일을 적어주세요."}
          onChange={onChangeTodo}
        />
        <Button
          data-testid="new-todo-add-button"
          width={125}
          isAllValidateChecked={true}
          onClick={() => clickAddTodoButton()}
        >
          추가
        </Button>
      </InputBox>
      <TodoListBox>
        {todoListData.map((todo, index) => (
          <>
            {clickedModifyArray[index] ? (
              <li key={todo.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => clickCheckBox(todo)}
                  />
                  <span>
                    <Input
                      data-testid="modify-input"
                      defaultValue={todo.todo}
                      onChange={(e) => onChangeNewTodo(e, index)}
                    />
                  </span>
                </label>
                <TodoOption>
                  <Button
                    data-testid="submit-button"
                    width={50}
                    isAllValidateChecked={true}
                    onClick={() => clickUpdateButton(todo, index)}
                  >
                    제출
                  </Button>
                  <Button
                    data-testid="cancel-button"
                    width={50}
                    isAllValidateChecked={true}
                    onClick={() => clickCancelButton(index)}
                  >
                    취소
                  </Button>
                </TodoOption>
              </li>
            ) : (
              <li key={todo.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => clickCheckBox(todo)}
                  />
                  <span>{todo.todo}</span>
                </label>
                <TodoOption>
                  <Button
                    data-testid="modify-button"
                    width={50}
                    isAllValidateChecked={true}
                    onClick={() => clickModifyButton(todo.todo, index)}
                  >
                    수정
                  </Button>
                  <Button
                    data-testid="delete-button"
                    width={50}
                    isAllValidateChecked={true}
                    onClick={() => clickDeleteButton(todo.id)}
                  >
                    삭제
                  </Button>
                </TodoOption>
              </li>
            )}
          </>
        ))}
      </TodoListBox>
    </TodoContainer>
  );
}

export default Todo;
