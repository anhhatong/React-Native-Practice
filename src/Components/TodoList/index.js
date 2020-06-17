import React from "react";
import { TouchableOpacity, View, TextInput } from "react-native";
import Swipeout from 'react-native-swipeout';
import styles from './styles';

export default class TodoList extends React.Component {

  //use constructor(props) and super(props) to initialize this.prop, which is to get access to fields in the parent class
  constructor(props) {
    super(props);
  }

  render() {
    const todoList = this.props.todoList; //get todoItem from prop

    let swipeBtns = [
      {
        text: 'Edit',
        backgroundColor: '#FFCD58',
        onPress: () => { this.props.toEditListScreen() }
      },
      {
        text: 'Delete',
        backgroundColor: '#FF5C4D',
        onPress: () => { this.props.removeTodoList() }
      }
    ];

    return (
      <View style={styles.itemContainer}>
        <Swipeout right={swipeBtns}
          autoClose={true}
          backgroundColor='transparent'>
          <TouchableOpacity
            style={styles.todoItem}
            onPress={() => this.props.listItems()}>

            <View style={styles.textContainer}>

              <TextInput
                autoFocus={false}
                multiline={true}
                maxLength={50}
                blurOnSubmit={true}
                onChangeText={(todoEdit) => this.props.editTodoList(todoEdit)}
                style={styles.text}
                value={todoList.title}
                placeholder="Enter your list title"
              />

            </View>

          </TouchableOpacity>
        </Swipeout>

      </View>
    )
  }
}