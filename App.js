/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import SplashScreen from './src/Screens/SplashScreen.js';
import LoginScreen from './src/Screens/LoginScreen.js';
import SignupScreen from './src/Screens/SignupScreen.js';
import HomeScreen from './src/Screens/HomeScreen.js';
import ListScreen from './src/Screens/ListScreen.js';
import DetailScreen from './src/Screens/DetailScreen.js';
import AddNewTodoScreen from './src/Screens/AddNewTodoScreen.js';
import EditScreen from './src/Screens/EditScreen.js';
import {
    StyleSheet
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

class App extends React.Component {
    constructor() { // when we have a constructor, super() must be called to initialize "this"
        super();
        this.state = {
            isSearching: false,
            todoEdit: '',
            todosUnmatched: [],
            todoListsUnmatched: [],
            isShowingOverdue: false,
            searchStr: '',
            todoInput: '',
            currentDate: '',
            todos: [
                { listId: 0, id: 1, title: "Todo 2", done: false, date: '' },
                { listId: 0, id: 0, title: "Todo 1", done: false, date: '' }
            ],
            lists: [
                {
                    id: 1, title: "List 2", list: [
                        { listId: 1, id: 1, title: "Todo 2", done: false, date: new Date(2019, 8, 3) },
                        { listId: 1, id: 0, title: "Todo 1", done: false, date: new Date(2018, 4, 3) }
                    ]
                },
                {
                    id: 0, title: "List 1", list: [
                        { listId: 0, id: 1, title: "Todo 2", done: false, date: new Date() },
                        { listId: 0, id: 0, title: "Todo 1", done: false, date: new Date(2020, 5, 4) }
                    ]
                }
            ],
            listId: 0,
            todoId: 0
        };
    }





    //main method
    render() {


        return (

            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen} />
                     <Stack.Screen
                        name="Signup"
                        component={SignupScreen} />
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen} />
                    <Stack.Screen
                        name="List"
                        component={ListScreen} />
                    <Stack.Screen
                        name="Detail"
                        component={DetailScreen} />
                    <Stack.Screen
                        name="AddTodo"
                        component={AddNewTodoScreen} />
                    <Stack.Screen
                        name="Edit"
                        component={EditScreen} />
                </Stack.Navigator>
            </NavigationContainer>


        );
    }
}

const RootNavigator = createSwitchNavigator({
    App: App,
    Splash: SplashScreen
}, {
    // `initialRouteName` tells the React Navigation navigator
    // which route to start at. If you don't specify an initial
    // route it'll choose the first route in the navigator config.
    // In this example we tell it to start on the 'Splash' route,
    // otherwise it would have shown the 'App' route.
    initialRouteName: 'Splash'
});


const styles = StyleSheet.create({
    container: { //fill
        flex: 1, //how much an item occupies available space on screen
        backgroundColor: '#D1C2C2',
    },
    statusbar: {//status bar on top
        backgroundColor: '#FFCD58',
        height: 40
    },
    listContainer: {
        flex: 1,
        borderTopLeftRadius: 130,
        backgroundColor: "#fff"
    }
});
export default createAppContainer(RootNavigator);
