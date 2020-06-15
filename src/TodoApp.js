/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import SplashScreen from './Screens/SplashScreen.js';
import LoginScreen from './Screens/LoginScreen.js';
import SignupScreen from './Screens/SignupScreen.js';
import HomeScreen from './Screens/HomeScreen.js';
import OverdueTab from './Screens/OverdueTab.js';
import DueTomorrowTab from './Screens/DueTomorrowTab.js';
import ListScreen from './Screens/ListScreen.js';
import DetailScreen from './Screens/DetailScreen.js';
import AddNewTodoScreen from './Screens/AddNewTodoScreen.js';
import EditScreen from './Screens/EditScreen.js';
import EditListScreen from './Screens/EditListScreen.js';
import ChangeUsernameScreen from './Screens/ChangeUsernameScreen.js';
import ChangePasswordScreen from './Screens/ChangePasswordScreen.js';
import CustomDrawerContent from './Components/CustomDrawerContent.js';

import { createAppContainer, createSwitchNavigator, NavigationEvents } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeTab() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "#444444",
                inactiveTintColor: "#fff",
                labelStyle: {
                    fontSize: 16,
                    fontFamily: 'Gill Sans',
                    fontWeight: "bold"
                },
                style: {
                    borderRadius: 20,
                    backgroundColor: '#d1d3db',
                    height: (Platform.OS === 'ios') ? 75 : 50
                }
            }}>
            <Tab.Screen
                name="Today"
                component={HomeScreen} />
            <Tab.Screen
                name="Overdue"
                component={OverdueTab} />
            <Tab.Screen
                name="Tomorrow"
                component={DueTomorrowTab} />
        </Tab.Navigator>
    )
}

function Home() {
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
                username={"Username"}
                {...props} />}
        >
            <Drawer.Screen
                name="Home"
                component={HomeTab} />
            <Drawer.Screen
                name="List"
                options={{ drawerLabel: 'My Lists' }}
                component={ListScreen} />
            <Drawer.Screen
                name="ChangeUsername"
                options={{ drawerLabel: 'Change Username' }}
                component={ChangeUsernameScreen} />
            <Drawer.Screen
                name="ChangePassword"
                options={{ drawerLabel: 'Change Password' }}
                component={ChangePasswordScreen} />
        </Drawer.Navigator >
    );
}

class TodoApp extends React.Component {
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
                        name="EditList"
                        component={EditListScreen} />
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
    TodoApp: TodoApp,
    Splash: SplashScreen
}, {
    // `initialRouteName` tells the React Navigation navigator
    // which route to start at. If you don't specify an initial
    // route it'll choose the first route in the navigator config.
    // In this example we tell it to start on the 'Splash' route,
    // otherwise it would have shown the 'App' route.
    initialRouteName: 'Splash'
});

export default createAppContainer(RootNavigator);
