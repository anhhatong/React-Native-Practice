import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import LogOut from './LogOut.js';
import AsyncStorage from '@react-native-community/async-storage';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { logOut } from '../redux/actions/actions';

// const mapStateToProps = (state) => ({ state: state.todos });

// const mapDispatchToProps = (dispatch) => {
//     return {
//         logOut: () => dispatch(logOut())
//     }
// }

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
                    <Text style={styles.welcome}>{props.username}</Text>
                    <DrawerItemList {...props} />
                    <LogOut nav={props}/>
                </View>
            </LinearGradient>
        </DrawerContentScrollView>

    );
}

const styles = StyleSheet.create({
    welcome: {
        color: "#444444",
        fontSize: 16,
        fontFamily: 'Gill Sans',
        paddingBottom: "30%",
        fontWeight: '600',
        marginTop: '10%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    icon: {
        alignItems: 'flex-start',
        marginLeft: '5%'
    }
})

export default CustomDrawerContent;
