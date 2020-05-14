import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';

const SearchBar = (props) => {
  return (
          <View style={styles.inputContainer}>
          <TextInput
          clearButtonMode="always"
          style={styles.input}
          /* onChangeText checks when, passed through input todoInput, the text input is changed and set the space to that change */
          onChangeText={(str) => props.searchTodo(str)}
          value={props.searchStr}
          />
          <TouchableOpacity style = {styles.searchButton}>
          <Icon
          name='search'
          type='feather'
          color='#fff'
          onPress= {props.toggleIsSearching}/>
          </TouchableOpacity>
          </View>
          )
}

const styles = StyleSheet.create({
                                 inputContainer: {
                                 flexDirection: "row",
                                 justifyContent: "space-between",
                                 marginTop: '5%',
                                 marginBottom: '5%'
                                 },
                                 input: {
                                 backgroundColor: "#fff",
                                 fontSize: 15,
                                 color: '#444444',
                                 borderColor: "#FFCD58",
                                 borderWidth: 2,
                                 fontFamily: 'Gill Sans',
                                 flex: 1,
                                 height: '100%',
                                 paddingLeft: '5%',
                                 borderRadius: 0
                                 },
                                 searchButton: {
                                 backgroundColor: "#FFCD58",
                                 justifyContent: "center",
                                 alignItems: "center",
                                 height: 40,
                                 width: 100
                                 },
                                 searchButtonText: {
                                 fontWeight: "bold",
                                 fontSize: 20,
                                 color: "#fff"
                                 }
                                 })

export default SearchBar;

