import initialState from '../store/initialState';
import { TOGGLE_TODO, REMOVE_TODO, GOTO_EDIT, EDIT, GOTO_DETAIL } from "../actions/actionTypes";

const todos = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TODO: {
            const { listId, todoId } = action.payload;
            let temp = state.data.lists.map((todoList) => {
                if (todoList.id === listId) {
                    todoList.list = todoList.list.map((todo) => {
                        if (todo.id === todoId) {
                            todo.done = !todo.done
                        }
                        return todo;
                    })
                }
                return todoList;
            })
            return {
                ...state,
                data: {
                    ...state.data,
                    lists: temp
                }
            }
        }

        case REMOVE_TODO: {
            const { listId, todoId } = action.payload;
            let temp = state.data.lists.map((todoList) => {
                if (todoList.id === listId) {
                    let filtered;
                    filtered = todoList.list.filter((todo) => { return todo.id !== todoId });
                    todoList = {
                        ...state.data.lists[todoList.id],
                        list: filtered
                    }
                }
                return todoList;
            })
            return {
                ...state,
                data: {
                    ...state.data,
                    lists: temp
                }
            }
        }

        case GOTO_EDIT: {
            const { listId, todoId, title, currentDate } = action.payload;
            let temp = {
                ...state,
                data: {
                    ...state.data,
                    todoInput: title,
                    listId: listId,
                    todoId: todoId,
                    currentDate: currentDate
                }
            }
            return temp;
        }

        case EDIT: {
            const { listId, todoId, title, currentDate } = action.payload;
            let temp = state.data.lists.map((todoList) => {
                if (todoList.id === listId) {
                    todoList.list = todoList.list.map((todo) => {
                        if (todo.id === todoId) {
                            todo.title = title;
                            todo.date = currentDate;
                        }
                        return todo;
                    })
                }
                return todoList;
            })
            return {
                ...state,
                data: {
                    ...state.data,
                    lists: temp
                }
            }
        }

        case GOTO_DETAIL: {
            const { listId } = action.payload;
            let temp = {
                ...state,
                data: {
                    ...state.data,
                    listId: listId
                }
            }
            return temp;
        }

        default:
            return state;
    }
}

export default todos;