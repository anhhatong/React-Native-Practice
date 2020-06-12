/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import TodoApp from './src/TodoApp';
import configureStore from './src/redux/store/configureStore';
import { Provider } from 'react-redux'; //used to link store with TodoApp
import { persistStore, persistReducer } from 'redux-persist';

const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <TodoApp/>
            </Provider>
        );
    }
}

