import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const SortBar = (props) => { //props is an argument passed from parent App.js
    return (
        <LinearGradient
            colors={['#d1d3db', '#fff']}>
            <View style={styles.bar}>
                <View style={styles.iconContainer}>
                    <Icon
                        name='check-square'
                        type='feather'
                        reverse='true'
                        reverseColor='#116530'
                        size={25}
                        color='#DAD870'
                        onPress={props.sortDone}
                    />
                    <Icon
                        name='list'
                        type='Entypo'
                        reverse='true'
                        reverseColor='#fff'
                        size={25}
                        color='#bca638'
                        onPress={props.unsort}
                    />
                    <Icon
                        name='square'
                        type='feather'
                        reverse='true'
                        reverseColor='#fff'
                        size={25}
                        color='#9E7300'
                        onPress={props.sortUndone}
                    />
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    bar: {
        paddingBottom: '18%',
        alignItems: 'center'
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        paddingTop: '2%',
        width: '80%'
    }
});

export default SortBar; //App.js can now access Header class

