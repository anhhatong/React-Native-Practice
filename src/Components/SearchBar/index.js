import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';

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
      <TouchableOpacity style={styles.searchButton}>
        <Icon
          name='search'
          type='feather'
          color='#fff'
          onPress={props.toggleIsSearching} />
      </TouchableOpacity>
    </View>
  )


}

export default SearchBar;

