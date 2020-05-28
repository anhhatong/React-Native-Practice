/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import Header from './ios/Header.js'; //import the path of Header.js
import InputBar from './ios/InputBar.js'; //import the path of InputBar.js
import TodoItem from './ios/TodoItem.js'; //import the path of TodoItem.js
import TodoList from './ios/TodoList.js'; //import the path of TodoItem.js
import SearchBar from './ios/SearchBar.js';
import SplashScreen from './ios/SplashScreen.js';
import HomeScreen from './ios/HomeScreen.js';
import DetailScreen from './ios/DetailScreen.js';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    FlatList // list in react native
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

class App extends React.Component {
    constructor () { // when we have a constructor, super() must be called to initialize "this"
        super();
        this.state = {
        isSearching: false,
        isReordering: false,
        todoEdit: '',
        todosUnmatched: [],
        todoListsUnmatched: [],
        searchStr: '',
        todoInput: '',
        todos: [
                {id: 1, title:"Todo 2", done:false},
                {id: 0, title:"Todo 1", done:false}
                ],
        lists: [
                {id: 1, title: "List 2", list: [
                                                {id: 1, title:"Todo 2", done:false},
                                                {id: 0, title:"Todo 1", done:false}
                                                ]},
                {id: 0, title: "List 1", list: [
                                                {id: 1, title:"Todo 2", done:false},
                                                {id: 0, title:"Todo 1", done:false}
                                                ]}
                ],
        listId: 0
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
                name="Home"
                component={HomeScreen}
                initialParams={ this.state }/>
                <Stack.Screen
                name="Detail"
                component={DetailScreen} />
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
                                 flex:1,
                                 borderTopLeftRadius: 130,
                                 backgroundColor: "#fff"
                                 }
                                 });
export default createAppContainer(RootNavigator);
