import initialState from '../store/initialState';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, GOTO_EDIT, EDIT_TODO, GOTO_DETAIL, ADD_LIST, EDIT_LIST, REMOVE_LIST, GOTO_EDIT_LIST, FILTER } from "../actions/actionTypes";

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const { listId, title, date } = action.payload;
            let temp = state.data.lists.map((todoList) => {
                if (todoList.id === listId) {
                    let newId = todoList.list.length;
                    todoList = Object.assign({}, todoList.list, {
                        ...state.data.lists[listId],
                        list: [
                            ...state.data.lists[listId].list,
                            { listId: listId, todoId: newId, title: title, done: false, date: date }
                        ]
                    })
                }
                return todoList;
            })

            return {
                ...state,
                data: {
                    ...state.data,
                    todoInput: '',
                    currentDate: '',
                    lists: temp
                }
            };
        }
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
                    let i = 0;
                    filtered = todoList.list.map((todo) => {
                        todo.id = i;
                        i--;
                        return todo;
                    });
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

        case ADD_LIST: {
            const { title } = action.payload;
            let newId = state.data.lists.length;
            return {
                ...state,
                data: {
                    ...state.data,
                    todoInput: '',
                    lists: [
                        ...state.data.lists,
                        {
                            id: newId, title: title, list: [
                                { listId: newId, id: 0, title: "Todo 1", done: false, date: '' },
                                { listId: newId, id: 1, title: "Todo 2", done: false, date: '' }
                            ]
                        }
                    ]
                }
            };
        }

        case REMOVE_LIST: {
            const { listId } = action.payload;
            let temp = state.data.lists.filter((todoList) => { return todoList.id !== listId });
            let i = 0;
            
            temp = temp.map((todoList) => {
                todoList.list.map((todo) => {
                    todo.listId = i;
                    return todo;
                })
                todoList.id = i;
                i++;
                return todoList;
            });
            return {
                ...state,
                data: {
                    ...state.data,
                    lists: temp
                }
            }
        }

        case EDIT_LIST: {
            const { title } = action.payload;
            let temp = state.data.lists.map((todoList) => {
                if (todoList.id === state.data.listId) {
                    todoList = {
                        ...state.data.lists[todoList.id],
                        title: title
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

        case GOTO_EDIT_LIST: {
            const { listId, title } = action.payload;
            return {
                ...state,
                data: {
                    ...state.data,
                    todoInput: title,
                    listId: listId
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

        case EDIT_TODO: {
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
                    todoInput: '',
                    currentDate: '',
                    lists: temp
                }
            }
        }

        case GOTO_DETAIL: {
            const { listId } = action.payload;
            let items = state.data.lists[listId].list;
            let temp = {
                ...state,
                data: {
                    ...state.data,
                    listId: listId,
                    todos: items
                }
            }
            return temp;
        }

        case FILTER: {
            const { filter } = action.payload;
            let listId = state.data.listId;
            let filtered;
            switch (filter) {
                case 'SHOW_ALL': {
                    filtered = state.data.lists[listId].list;
                    break;
                }
                case 'SHOW_DONE': {
                    filtered = state.data.lists[listId].list.filter((todo) => { return todo.done !== false });
                    break;
                }
                case 'SHOW_UNDONE': {
                    filtered = state.data.lists[listId].list.filter((todo) => { return todo.done !== true });
                }
            }

            return Object.assign({}, state, {
                ...state,
                data: {
                    ...state.data,
                    todos: filtered
                }
            })
        }

        default:
            return state;
    }
}

export default todos;