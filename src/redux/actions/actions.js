import {
  TOGGLE_TODO, REMOVE_TODO, GOTO_EDIT, EDIT_TODO, GOTO_DETAIL,
  ADD_TODO, ADD_LIST, EDIT_LIST, REMOVE_LIST, GOTO_EDIT_LIST, LOG_OUT,
  RETRIEVE_DATA, CHANGE_USERNAME, CHANGE_PASSWORD, LOG_IN
} from "./actionTypes";

export const addTodo = (listId, title, date) => ({
  type: ADD_TODO,
  payload: { listId, title, date }
});

export const toggleTodo = (listId, todoId) => ({
  type: TOGGLE_TODO,
  payload: { listId, todoId }
});

export const removeTodo = (listId, todoId) => ({
  type: REMOVE_TODO,
  payload: { listId, todoId }
});

export const addList = (title) => ({
  type: ADD_LIST,
  payload: { title }
});

export const editList = (title) => ({
  type: EDIT_LIST,
  payload: { title }
});

export const removeList = (listId) => ({
  type: REMOVE_LIST,
  payload: { listId }
});

export const gotoEditList = (listId, title) => ({
  type: GOTO_EDIT_LIST,
  payload: { listId, title }
});

export const gotoEdit = (listId, todoId, title, currentDate) => ({
  type: GOTO_EDIT,
  payload: { listId, todoId, title, currentDate }
});

export const editTodo = (listId, todoId, title, currentDate) => ({
  type: EDIT_TODO,
  payload: { listId, todoId, title, currentDate }
});

export const gotoDetail = (listId) => ({
  type: GOTO_DETAIL,
  payload: { listId }
});

export const logOut = () => ({
  type: LOG_OUT,
  payload: {}
});

export const retrieveData = (data, userInfo) => ({
  type: RETRIEVE_DATA,
  payload: { data, userInfo }
});

export const changeUsername = (username) => ({
  type: CHANGE_USERNAME,
  payload: { username }
});

export const changePassword = (password) => ({
  type: CHANGE_PASSWORD,
  payload: { password }
});

export const logIn = () => ({
  type: LOG_IN,
  payload: {}
});
