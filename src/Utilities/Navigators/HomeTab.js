import React from 'react';
import HomeScreen from '../../Screens/HomeScreen';
import OverdueTab from '../../Screens/OverdueTab';
import DueTomorrowTab from '../../Screens/DueTomorrowTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { font } from '../../assets';

const Tab = createBottomTabNavigator();
function HomeTab() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "#444444",
                inactiveTintColor: "#fff",
                labelStyle: {
                    fontSize: 16,
                    fontFamily: font,
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

export default HomeTab;