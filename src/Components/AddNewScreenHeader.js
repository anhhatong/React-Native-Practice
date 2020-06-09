import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const AddNewScreenHeader = (props) => { //props is an argument passed from parent App.js
  return (
          <LinearGradient
          colors={['#FFCD58', '#FF9636']}
          style = {styles.header}>
          
          {/* pass string title from App.js */}
          <View style = {styles.iconContainer}>
          

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
          onPress={props.save}/>

          
          </View>

          <Text style={styles.title}>{ props.title } </Text>
          
          
          </LinearGradient>
          )
}

const styles = StyleSheet.create({
                                 header: { //customize the header bar
                                 backgroundColor: "#E9B210",
                                 height: '10%',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 borderBottomRightRadius: 700
                                 },
                                 title: {
                                  color: '#fff',
                                  fontSize: 15,
                                  fontFamily: "Gill Sans",
                                  fontWeight: '700',
                                  paddingBottom: '2%',
                                 paddingLeft: '10%',
                                 paddingRight: '10%'
                                 },
                                 iconContainer: {
                                 flex: 1,
                                 flexDirection: 'row',
                                 alignContent: 'center',
                                 justifyContent: 'space-between',
                                 width: '90%',
                                 marginTop: '2%'
                                 }
                                 });

export default AddNewScreenHeader; //App.js can now access Header class

