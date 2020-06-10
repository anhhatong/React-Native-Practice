import initialState from '../store/initialState';

const todos = (state = initialState, action) => {
    let nextId = state.length;
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state, {
                    listId: action.listId, id: nextId+1, title: action.todoInput, done: false, date: action.date
                }
            ]
        case "TOGGLE_TODO":
            return state.map(todo => 
                (todo.id === action.id)? {...todo, done: !todo.done} : todo)
        default:
            return state;
    }
}

export default todos;