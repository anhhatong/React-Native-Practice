import React from 'react';
import {
  View,
  TextInput
} from 'react-native';
import styles from './styles';

const UsernameInput = (props) => {

  return (
    <View style={styles.inputContainer}>
      <TextInput
        clearButtonMode="always"
        style={styles.input}
        /* onChangeText checks when, passed through input todoInput, the text input is changed and set the space to that change */
        onChangeText={(usernameInput) => props.textChange(usernameInput)}
        maxLength={30}
        blurOnSubmit={true}
        value={props.usernameInput}
        placeholder='Enter new username'
      />

    </View>
  )
}

export default UsernameInput;

