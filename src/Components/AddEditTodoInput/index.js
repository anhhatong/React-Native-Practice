import React from 'react';
import {
  View,
  TextInput
} from 'react-native';
import styles from './styles';

const AddNewInputBar = (props) => {

  return (
    <View style={styles.inputContainer}>
      <TextInput
        clearButtonMode="always"
        style={styles.input}
        /* onChangeText checks when, passed through input todoInput, the text input is changed and set the space to that change */
        onChangeText={(todoInput) => props.textChange(todoInput)}
        value={props.todoInput}
        placeholder='New Todo'
      />

    </View>
  )
}

export default AddNewInputBar;

