import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Icon } from 'react-native-elements';

const Header = (props) => { //props is an argument passed from parent App.js
  return (
          <View style = {styles.header}>
          {/* pass string title from App.js */}
          <View style = {styles.iconContainer}>
          <Icon
          name={(props.isSearching)? 'plus' : 'search'}
          type='feather'
          color='#fff'
          onPress= {props.toggleIsSearching}/>
          </View>
          <Text style={styles.title}>{ props.title } </Text>
          </View>
          )
}

const styles = StyleSheet.create({
                                 header: { //customize the header bar
                                 backgroundColor: "#FFCD58",
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
                                 textTransform: 'uppercase'
                                 },
                                 iconContainer: {
                                 marginLeft: "auto",
                                 marginBottom: "auto",
                                 marginRight: "5%"
                                 }
                                 });

export default Header; //App.js can now access Header class
