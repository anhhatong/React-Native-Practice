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

  if (props.isReordering === false) {

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

  } else {
    return (
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.doneButton}
          /* When press on button, addNewTodo() is called from App.js */
          onPress={props.allowReordering}>
          <Text style={styles.doneText}> Done </Text>
        </TouchableOpacity>
      </View>
    )
  }
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
    borderColor: "#D05301",
    borderBottomWidth: 2,
    fontFamily: 'Gill Sans',
    flex: 1,
    height: '100%',
    paddingLeft: '5%',
    borderRadius: 0,
    fontWeight: '100'
  },
  searchButton: {
    backgroundColor: "#880C25",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 100
  },
  searchButtonText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff"
  },
  doneButton: {
    backgroundColor: "#880C25",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: '100%'
  },
  doneText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    color: '#fff',
    fontWeight: 'bold'
  }
})

export default SearchBar;

