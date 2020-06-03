import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  FlatList // list in react native
} from 'react-native';
import AddNewScreenHeader from '../Components/AddNewScreenHeader'; //import the path of Header.js
import AddNewInputBar from '../Components/AddNewInputBar'; //import the path of AddNewInputBar.js
import DatePicker from '../Components/DatePicker';

import LinearGradient from 'react-native-linear-gradient';

export default class EditScreen extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.route.params;
    //console.log(this.state);
  }

  //method to add more todos to the array of todos
  save() {
    let todos = this.state.todos;
    let listId = this.state.listId;
    let lists = this.state.lists;
    let state = this.state;
    let todoId = this.state.todoId;
    let todoInput = this.state.todoInput;
    let currentDate = this.state.currentDate;

    this.setState({ todos });

    //check if there is any input string at all
    if (this.state.todoInput !== "") {

      lists = lists.map((todoList) => {
        if (todoList.id == listId) {
          todoList.list = todoList.list.map((todo) => {
            if (todo.id == todoId) {
              todo.title = todoInput;
              todo.date = currentDate;
            }
            return todo;
          })
          todos = todoList.list.sort((a, b) => a.date - b.date);
        }
        return todoList;
      })

      //reset state after adding the new todo
      this.setState({ todoInput: '', todos, lists, currentDate: '' },
        function () {
          state = this.state;
          this.props.navigation.navigate('Detail', state);
        });
    }


  }

  dateChange(date) {
    let state = this.state;
    let currentDate = date;

    this.setState({ currentDate });
  }


  render() {
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>; //platform-specific for the status bar on top
    return (



      <LinearGradient
        colors={['#D1C2C2', '#fff']}
        style={styles.container}>
        {/*display status bar on top*/}
        {statusbar}

        {/*render the Header here to pass this string to Header class */}
        <AddNewScreenHeader
          title="Edit"
          save={() => this.save()}
          cancel={() => this.props.navigation.navigate('Detail', this.state)}
        />
        <View style={styles.listContainer}>

          <AddNewInputBar
            todoInput={this.state.todoInput}
            textChange={todoInput => this.setState({ todoInput })}

          />

          <DatePicker
            currentDate={this.state.currentDate}
            dateChange={date => this.dateChange(date)}
          />

        </View>

      </LinearGradient>

    );
  }
}

const styles = StyleSheet.create({
  container: { //fill
    flex: 1, //how much an item occupies available space on screen
    backgroundColor: '#D1C2C2',
  },
  statusbar: {//status bar on top
    backgroundColor: '#FFCD58',
    height: 40
  },
  listContainer: {
    flex: 1,
    borderTopLeftRadius: 130,
    backgroundColor: "#fff",
    marginTop: '2%',
    paddingBottom: '5%'
  }
});




