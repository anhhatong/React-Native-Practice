import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTab from './HomeTab';
import 'react-native-gesture-handler';
import { font } from '../../assets';

import ChangeUsernameScreen from '../../Screens/ChangeUsernameScreen';
import ChangePasswordScreen from '../../Screens/ChangePasswordScreen';
import CustomDrawerContent from '../../Components/CustomDrawerContent';
import ListScreen from '../../Screens/ListScreen';

const Drawer = createDrawerNavigator();
function HomeDrawer() {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: '#FF9636',
                inactiveTintColor: '#444444',
                itemStyle: { marginVertical: '3%' },
                labelStyle: {
                    fontFamily: font,
                    fontSize: 16
                }
            }}
            drawerStyle={{
                backgroundColor: '#d1d3db'
            }}
            drawerContent={(props) => <CustomDrawerContent
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

export default HomeDrawer;