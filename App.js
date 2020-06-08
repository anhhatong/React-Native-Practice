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
import CustomDrawerContent from './src/Components/CustomDrawerContent.js';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { createAppContainer, createSwitchNavigator, NavigationEvents } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Home({ route }) {
    const state = route.params;
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: '#FF9636',
                itemStyle: { marginVertical: '3%' },
            }}
            drawerStyle={{
                backgroundColor: '#d1d3db'
            }}
            drawerContent={(props) => <CustomDrawerContent
                username={state.info.username}
                {...props} />}>
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                initialParams={state} />
            <Drawer.Screen
                name="List"
                options={{ drawerLabel: 'My Lists' }}
                component={ListScreen}
                initialParams={state.data}/>
        </Drawer.Navigator >
    );
}

class App extends React.Component {
    constructor() { // when we have a constructor, super() must be called to initialize "this"
        super();
    }
    //main method
    render() {


        return (

            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                    gestureEnabled: false
                }}>
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen} />
                    <Stack.Screen
                        name="Signup"
                        component={SignupScreen} />
                    <Stack.Screen
                        name="Home"
                        component={Home} />
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
