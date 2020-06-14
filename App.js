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
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './src/redux/store/configureStore';
import { persistStore } from 'redux-persist';

const store = configureStore();

export default class App extends React.Component {
    render() {
        const persistor = persistStore(store);
        return (
            <Provider store={store}>
                {/* <PersistGate loading={null} persistor={persistor}> */}
                <TodoApp/>
                {/* </PersistGate> */}
            </Provider>
        );
    }
}

