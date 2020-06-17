import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';

const InputBar = (props) => {

  return (
    <View style={styles.inputContainer}>
      <TextInput
        clearButtonMode="always"
        style={styles.input}
        /* onChangeText checks when, passed through input todoInput, the text input is changed and set the space to that change */
        onChangeText={(todoInput) => props.textChange(todoInput)}
        placeholder='New List'
        value={props.todoInput}
      />
      <TouchableOpacity style={styles.addButton}
        /* When press on button, addNewTodo() is called from App.js */
        onPress={props.addNewTodo}>
        <Icon
          name='playlist-add'
          type='MaterialIcons'
          color='#fff'
          onPress={props.toggleIsSearching} />
      </TouchableOpacity>
    </View>
  )
}

export default InputBar;
