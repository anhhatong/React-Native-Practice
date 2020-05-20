import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';

const InputBar = (props) => {
  return (
          <View style={styles.inputContainer}>
          <TextInput
          clearButtonMode="always"
          style={styles.input}
          /* onChangeText checks when, passed through input todoInput, the text input is changed and set the space to that change */
          onChangeText={(todoInput) => props.textChange(todoInput)}
          value={props.todoInput}
          />
          <TouchableOpacity style = {styles.addButton}
          /* When press on button, addNewTodo() is called from App.js */
          onPress={props.addNewTodo}>
          <Icon
          name='plus'
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
                                 borderColor: "#5C0601",
                                 borderBottomWidth: 2,
                                 fontFamily: 'Gill Sans',
                                 flex: 1,
                                 height: '100%',
                                 paddingLeft: '5%',
                                 borderRadius: 0
                                 },
                                 addButton: {
                                 backgroundColor: "#5C0601",
                                 justifyContent: "center",
                                 alignItems: "center",
                                 height: 40,
                                 width: 100
                                 },
                                 addButtonText: {
                                 fontWeight: "bold",
                                 fontSize: 20,
                                 color: "#fff"
                                 }
                                 })

export default InputBar;
