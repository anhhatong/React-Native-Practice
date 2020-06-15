import { combineReducers } from 'redux';
import store from '../store/configureStore'
import todos from './todos';

const appReducer = combineReducers ({
    todos
});

const rootReducer = (state, action) => {
    if (action.type === 'LOG_OUT') {
        state = undefined;
    }
    return appReducer(state, action);
}; 

export default rootReducer;