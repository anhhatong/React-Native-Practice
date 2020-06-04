import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  FlatList // list in react native
} from 'react-native';
import AddNewScreenHeader from '../Components/AddNewScreenHeader.js'; //import the path of Header.js
import AddNewInputBar from '../Components/AddNewInputBar.js'; //import the path of AddNewInputBar.js
import DatePicker from '../Components/DatePicker.js';

import LinearGradient from 'react-native-linear-gradient';
import moment from "moment";

export default class AddNewTodoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.route.params;
    console.log(this.state);
  }

  //method to add more todos to the array of todos
  save() {
    let todos = this.state.todos;
    let listId = this.state.listId;
    let lists = this.state.lists;
    let state = this.state;

    //check if there is any input string at all
    if (this.state.todoInput !== "") {
      //add new todo in the beignning of the array
      todos.unshift({
        listId: listId,
        id: todos.length,
        title: this.state.todoInput,
        done: false,
        date: this.state.currentDate
      });

      lists = lists.map((todoList) => {
        if (todoList.id == listId) {
          todoList.list = todos;
        }
        return todoList;
      });

      todos.sort((a, b) => a.date - b.date);

      //reset state after adding the new todo
      this.setState({ todoInput: '', todos, lists, currentDate: '' },
        function () {
          state = this.state;
          this.props.navigation.navigate('Detail', state);
        });
    }
    //console.log(this.state);

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
          title={
            this.state.lists.map((todoList) => {
              if (todoList.id == this.state.listId) {
                return 'New Todo for ' + todoList.title;
              }
            })}
          save={() => this.save()}
          cancel={() => this.props.navigation.navigate('Detail', this.state)}
        />
        <View style={styles.listContainer}>

          <AddNewInputBar
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




