import { TOGGLE_TODO, REMOVE_TODO, GOTO_EDIT, EDIT, GOTO_DETAIL } from "./actionTypes";
export const toggleTodo = (listId, todoId) => ({
  type: TOGGLE_TODO,
  payload: { listId, todoId }
});

export const removeTodo = (listId, todoId) => ({
  type: REMOVE_TODO,
  payload: { listId, todoId }
});

export const gotoEdit = (listId, todoId, title, currentDate) => ({
  type: GOTO_EDIT,
  payload: { listId, todoId, title, currentDate }
});

export const edit = (listId, todoId, title, currentDate) => ({
  type: EDIT,
  payload: { listId, todoId, title, currentDate }
});

export const gotoDetail = (listId) => ({
  type: GOTO_DETAIL,
  payload: { listId }
});
