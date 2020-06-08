import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';

const CustomDrawerContent = (props) => {
    console.log(props);
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
                    onPress={() => props.navigation.closeDrawer()}/>
                    </View>
                    <Text style={styles.welcome}>{props.username}</Text>
                    <DrawerItemList {...props} />
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
