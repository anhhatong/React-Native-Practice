import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  FlatList // list in react native
} from 'react-native';
import TodoItem from '../Components/TodoItem.js';
import Header from '../Components/Header.js'; //import the path of Header.js
import SortBar from '../Components/SortBar.js';
import SearchBar from '../Components/SearchBar.js';
import AddNewTodoBtn from '../Components/AddNewTodoBtn.js';

import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({ state: state.todos.data });


class DetailScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props.state.listId);
    this.state = props.state;
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props !== prevProps) {
      this.setState(this.props.state);
    }
  }

 openDrawer() {
    let state = this.state;
    //this.searchTodo('');
    let lists = this.state.lists;
    let todos = this.state.todos;
    let listId = this.state.listId;

    lists = lists.map((todoList) => {
      if (listId == todoList.id) {
        todos = todoList.list;
      }
      return todoList;
    })

    this.setState({ todos }, function () {
      state = this.state;
      this.props.navigation.openDrawer();
    });
  }

  backToList() {
    let state = this.state;
    //this.searchTodo('');
    let lists = this.state.lists;
    let todos = this.state.todos;
    let listId = this.state.listId;

    lists = lists.map((todoList) => {
      if (listId == todoList.id) {
        todos = todoList.list;
      }
      return todoList;
    })

    this.setState({ todos }, function () {
      state = this.state;
      this.props.navigation.navigate('List');
    });


  }

  toAddNewTodoScreen() {
    let state = this.state;
    //this.searchTodo('');
    let lists = this.state.lists;
    let todos = this.state.todos;
    let listId = this.state.listId;

    lists = lists.map((todoList) => {
      if (listId == todoList.id) {
        todos = todoList.list;
      }
      return todoList;
    })

    this.setState({ todos }, function () {
      state = this.state;
      console.log(state);
      this.props.navigation.navigate('AddTodo');
    });

  }

  toEditScreen(item) {
    let state = this.state;

    //this.searchTodo('');
    let lists = this.state.lists;
    let todos = this.state.todos;
    let listId = this.state.listId;

    lists = lists.map((todoList) => {
      if (listId == todoList.id) {
        todos = todoList.list;
      }
      return todoList;
    })

    this.setState({ todos, todoId: item.id, todoInput: item.title, currentDate: item.date }, function () {
      state = this.state;
      console.log(state);
      this.props.navigation.navigate('Edit');
    });
  }

  //method to change 'done' state of each todo item
  toggleDone(item) {
    let todos = this.state.todos;
    let lists = this.state.lists;
    let listId = this.state.listId;

    lists = lists.map((todoList) => {
      if (todoList.id == listId) {
        todoList.list = todoList.list.map((todo) => {
          if (todo.id == item.id) {
            todo.done = !todo.done;
          }
          return todo;
        });
        todos = todoList.list;
      }
      return todoList;
    })

    this.setState({ lists, todos });

  }


  toggleIsSearching() {
    let isSearching = !this.state.isSearching;
    this.searchTodo('');
    this.setState({ isSearching });
  }

  //method to search for todo items
  searchTodo(str) {
    let lists = this.state.lists;
    let listId = this.state.listId;
    let todos = this.state.todos; //array of matched items from the last search
    let todosUnmatched = this.state.todosUnmatched; //array of unmatched items from the last search
    todos = todos.concat(todosUnmatched);

    // first call to quick sort
    todos = todos.sort((a, b) => a.date - b.date);

    todosUnmatched = []; //re-initialize todosUnmatched

    //filter unmatched items
    todosUnmatched = todos.filter((todo) => { return (!(todo.title.toLowerCase().includes(str.toLowerCase()))) });
    this.setState({ todosUnmatched });

    //filter matched items
    todos = todos.filter((todo) => { return (todo.title.toLowerCase().includes(str.toLowerCase())) });
    this.setState({ todos });

    lists = lists.map((todoList) => {
      if (todoList.id == listId) {
        todoList.list = todos;
      }
      return todoList;
    });
  }




  //method to remove a todo item
  removeTodo(item) {
    let todos = this.state.todos;
    let lists = this.state.lists;
    let listId = this.state.listId;

    lists = lists.map((todoList) => {
      if (todoList.id == listId) {
        todoList.list = todoList.list.filter((todo) => { return todo.id !== item.id });
        todos = todoList.list;
      }
      return todoList;
    })

    let i = todos.length - 1;
    todos = todos.map((todo) => {
      todo.id = i;
      i--;
      return todo;
    });

    this.setState({ todos, lists });
  }

  relabelIds() {
    let todos = this.state.todos;

    let i = todos.length - 1;
    todos = todos.map((todo) => {
      todo.id = i;
      i--;
      return todo;
    });

    this.setState({ todos });
    console.log(this.state);
  }

  sortDone() {
    let lists = this.state.lists;
    let todos = this.state.todos;
    let listId = this.state.listId;

    lists = lists.map((todoList) => {
      if (listId == todoList.id) {
        todos = todoList.list.filter((todo) => { return todo.done == true }
        )
      }
      return lists;
    })

    this.setState({ todos });
  }

  sortUndone() {
    let lists = this.state.lists;
    let todos = this.state.todos;
    let listId = this.state.listId;

    lists = lists.map((todoList) => {
      if (listId == todoList.id) {
        todos = todoList.list.filter((todo) => { return todo.done != true }
        )
      }
      return lists;
    })

    this.setState({ todos });
  }

  unsort() {
    let lists = this.state.lists;
    let todos = this.state.todos;
    let listId = this.state.listId;

    lists = lists.map((todoList) => {
      if (listId == todoList.id) {
        todos = todoList.list;
      }
      return todoList;
    })

    this.setState({ todos });
  }

  render() {
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>; //platform-specific for the status bar on top

    return (

      <LinearGradient
        colors={['#FF9636', '#fff', '#D1C2C2', '#fff']}
        style={styles.container}>
        {/*display status bar on top*/}
        {statusbar}

        {/*render the Header here to pass this string to Header class */}
        <Header
          listTitle={
            this.state.lists.map((todoList) => {
              if (todoList.id == this.state.listId) {
                return todoList.title;
              }
            })}
          isSearching={this.state.isSearching}
          isBackVisible={true}
          toggleIsSearching={() => this.toggleIsSearching()}
          backToList={() => this.backToList()} />

        {(this.state.isSearching) ?
          (
            <SearchBar
              searchTodo={(str) => this.searchTodo(str)}
            />) : (

            <AddNewTodoBtn
              toAddNewTodoScreen={() => this.toAddNewTodoScreen()}
            />)
        }

        <View style={styles.listContainer}>

          <FlatList
            data={this.state.todos} // get the todos array
            keyExtractor={(item, index) => index.toString()} // provide key index as a string; have to specify it due to no default key value
            renderItem={({ item, index }) => { // render an item from data
              return (
                <TodoItem
                  todoItem={item}
                  isHidingListTitle={true}
                  toggleDone={() => this.toggleDone(item)}
                  removeTodo={() => this.removeTodo(item)}
                  toEditScreen={() => this.toEditScreen(item)}
                />
              )
            }
            }
          />


          <SortBar
            sortDone={() => this.sortDone()}
            sortUndone={() => this.sortUndone()}
            unsort={() => this.unsort()} />

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
    paddingBottom: '5%'
  }
});

export default connect (mapStateToProps)(DetailScreen);