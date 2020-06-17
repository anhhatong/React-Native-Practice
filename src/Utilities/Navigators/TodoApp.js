import React from 'react';
import LoginScreen from '../../Screens/LoginScreen';
import SignupScreen from '../../Screens/SignupScreen';
import DetailScreen from '../../Screens/DetailScreen';
import AddNewTodoScreen from '../../Screens/AddTodoScreen';
import EditScreen from '../../Screens/EditTodoScreen';
import EditListScreen from '../../Screens/EditListScreen';

import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { connect } from "react-redux";
import HomeDrawer from './HomeDrawer';

const Stack = createStackNavigator();

const mapStateToProps = (state) => ({ state: state.todos.data });

class TodoApp extends React.Component {
    constructor(props) { // when we have a constructor, super() must be called to initialize "this"
        super(props);
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
                        name={this.props.state.isLoggedIn ? "Home" : "Login"}
                        component={this.props.state.isLoggedIn ? HomeDrawer : LoginScreen} />
                    <Stack.Screen
                        name="Signup"
                        component={SignupScreen} />
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

export default connect(mapStateToProps)(TodoApp);