import { useAxios } from "../useAxios";

/** Todo 리스트 요청 */
export const todoListRequest = async () => {
  return await useAxios.get(`/todos`);
};

/** Todo 생성 */
export const createTodoRequest = async (todoData) => {
  return await useAxios.post(`/todos`, todoData);
};

/** Todo 수정 */
export const updateTodoRequest = async (todoId, todoData) => {
  return await useAxios.put(`/todos/${todoId}`, todoData);
};

/** Todo 삭제 */
export const deleteTodoRequest = async (todoId) => {
  return await useAxios.delete(`/todos/${todoId}`);
};
