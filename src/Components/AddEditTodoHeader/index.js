import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const AddNewScreenHeader = (props) => { //props is an argument passed from parent App.js
  return (
    <LinearGradient
      colors={['#FFCD58', '#FF9636']}
      style={styles.header}>

      {/* pass string title from App.js */}
      <View style={styles.iconContainer}>


        <Icon
          name='close'
          type='fontAwesome'
          color='#fff'
          onPress={props.cancel}
        />


        <Icon
          name='check'
          type='Entypo'
          color='#fff'
          onPress={props.save} />


      </View>

      <Text style={styles.title}>{props.title} </Text>


    </LinearGradient>
  )
}

export default AddNewScreenHeader; //App.js can now access Header class

