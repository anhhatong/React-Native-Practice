/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import SplashScreen from './Screens/SplashScreen.js';
import TodoApp from './TodoApp.js';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import 'react-native-gesture-handler';


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
