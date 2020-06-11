import { TOGGLE_TODO, REMOVE_TODO, GOTO_EDIT } from "./actionTypes";
export const toggleTodo = (listId, todoId) => ({
  type: TOGGLE_TODO,
  payload: { listId, todoId }
});

export const removeTodo = (listId, todoId) => ({
  type: REMOVE_TODO,
  payload: { listId, todoId }
});

export const gotoEdit = (listId, todoId) => ({
  type: GOTO_EDIT,
  payload: { listId, todoId }
});