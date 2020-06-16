import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import LogOut from './LogOut.js';
import UserInfoDisplay from './UserInfoDisplay.js';
import { Icon } from 'react-native-elements';


const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <LinearGradient
                colors={['#d1d3db', '#fff', '#d1d3db']}
                style={styles.container}>
                <View>
                    <View style={styles.icon}>
                        <Icon
                            name='menu'
                            type='feather'
                            color='#fff'
                            size={20}
                            onPress={() => props.navigation.closeDrawer()} />
                    </View>
                    <UserInfoDisplay />
                    <DrawerItemList {...props} />
                    <LogOut nav={props} />
                </View>
            </LinearGradient>
        </DrawerContentScrollView>

    );
}

const styles = StyleSheet.create({
    icon: {
        alignItems: 'flex-start',
        marginLeft: '5%'
    }
})

export default CustomDrawerContent;
