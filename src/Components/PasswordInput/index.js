import React from 'react';
import {
  View,
  TextInput
} from 'react-native';
import styles from './styles';

const PasswordInput = (props) => {

  return (
    <View style={styles.inputContainer}>
      <TextInput
        clearButtonMode="always"
        style={styles.input}
        /* onChangeText checks when, passed through input todoInput, the text input is changed and set the space to that change */
        onChangeText={(passwordInput) => props.textChange(passwordInput)}
        value={props.passwordInput}
        placeholder='Enter new password'
        secureTextEntry={true}
      />

    </View>
  )
}

export default PasswordInput;

