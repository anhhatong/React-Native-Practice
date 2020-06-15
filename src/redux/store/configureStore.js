import AsyncStorage from '@react-native-community/async-storage';
import { createStore } from 'redux'
import rootReducer from '../reducers'
import { persistReducer } from 'redux-persist';

export default function configureStore(initialState) {

    const persistConfig = {
        // Root
        key: 'root',
        // Storage Method (React Native)
        storage: AsyncStorage
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    return createStore(
        // rootReducer,
        persistedReducer,
        {},
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}