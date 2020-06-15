import React from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';

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

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    marginRight: '5%',
    marginLeft: '5%'
  },
  input: {
    fontSize: 25,
    color: '#444444',
    borderColor: "#5C0601",
    borderBottomWidth: 2,
    fontFamily: 'Gill Sans',
    fontWeight: '100',
    height: '25%',
    paddingLeft: '5%',
    borderRadius: 0,
    backgroundColor: '#fff'
  }
})

export default PasswordInput;

