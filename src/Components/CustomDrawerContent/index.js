import React from 'react';
import { View } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import LogOut from '../LogOutButton/index.js';
import UserInfoDisplay from '../UserInfoDisplay/index.js';
import { Icon } from 'react-native-elements';
import styles from './styles';


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

export default CustomDrawerContent;
