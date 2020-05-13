import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const Header = (props) => { //props is an argument passed from parent App.js
  return (
          <View style = {styles.header}>
          {/* pass string title from App.js */}
          <Text style={styles.title}>{ props.title } </Text>
          </View>
          )
}

const styles = StyleSheet.create({
                                 header: { //customize the header bar
                                 backgroundColor: "#FFCD58",
                                 height: 200,
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 borderBottomRightRadius: 700,
                                 },
                                 title: { //customize the title
                                 color: '#fff',
                                 fontSize: 30,
                                 fontWeight: '900',
                                 textTransform: 'uppercase'
                                 }
                                 });

export default Header; //App.js can now access Header class
