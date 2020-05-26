import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const Header = (props) => { //props is an argument passed from parent App.js
  return (
          <LinearGradient
          colors={['#FFCD58', '#FF9636']}
          style = {styles.header}>
          
          {/* pass string title from App.js */}
          <View style = {styles.iconContainer}>
          {(props.isBackVisible) ?
          <Icon
          name='chevron-left'
          type='feather'
          color='#fff'
          onPress={props.backToHome}/> : <Icon/>
          }
          <Icon
          name={(props.isSearching)? 'plus' : 'search'}
          type='feather'
          color='#fff'
          onPress= {props.toggleIsSearching}/>
          </View>
          {(props.isBackVisible) ?
          <Text style={styles.listTitle}
          adjustsFontSizeToFit>{ props.listTitle } </Text> :
          <Text style={styles.title}>{ props.title } </Text>
          }
          
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
                                 paddingBottom: '8%'
                                 },
                                 listTitle: {
                                  color: '#fff',
                                  fontSize: 20,
                                  fontFamily: "Gill Sans",
                                  fontWeight: '700',
                                  letterSpacing: 2,
                                  paddingBottom: '5%',
                                 paddingLeft: '10%',
                                 paddingRight: '10%'
                                 },
                                 iconContainer: {
                                 flex: 1,
                                 flexDirection: 'row',
                                 alignContent: 'center',
                                 justifyContent: 'space-between',
                                 width: '90%',
                                 marginTop: '5%'
                                 }
                                 });

export default Header; //App.js can now access Header class
