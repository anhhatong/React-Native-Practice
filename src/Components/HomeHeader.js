import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const HomeHeader = (props) => { //props is an argument passed from parent App.js
    return (
        <LinearGradient
            colors={['#FFCD58', '#FF9636']}
            style={styles.header}>

            {/* pass string title from App.js */}
            <View style={styles.iconContainer}>

                <Icon
                    name="menu"
                    type="feather"
                    color='#fff'
                    onPress={(props.openDrawer)} />


            </View>

            <Text style={styles.title}>{props.title} </Text>



        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header: { //customize the header bar
        backgroundColor: "#E9B210",
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 700
    },
    title: { //customize the title
        color: '#fff',
        fontSize: 30,
        fontFamily: "Gill Sans",
        fontWeight: '800',
        letterSpacing: 3,
        textTransform: 'uppercase',
        paddingBottom: '10%'
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-start',
        width: '90%',
        marginTop: '2%'
    }
});

export default HomeHeader; //App.js can now access Header class
