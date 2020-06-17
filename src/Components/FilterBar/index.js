import React from 'react';
import {
    View
} from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

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
                        onPress={props.showDone}
                    />
                    <Icon
                        name='list'
                        type='Entypo'
                        reverse='true'
                        reverseColor='#fff'
                        size={25}
                        color='#bca638'
                        onPress={props.showAll}
                    />
                    <Icon
                        name='square'
                        type='feather'
                        reverse='true'
                        reverseColor='#fff'
                        size={25}
                        color='#9E7300'
                        onPress={props.showUndone}
                    />
                </View>
            </View>
        </LinearGradient>
    )
}

export default SortBar; //App.js can now access Header class

