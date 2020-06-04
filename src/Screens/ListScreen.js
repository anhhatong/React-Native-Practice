import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  FlatList // list in react native
} from 'react-native';
import TodoList from '../Components/TodoList'; //import the path of TodoItem.js
import Header from '../Components/Header'; //import the path of Header.js
import InputBar from '../Components/InputBar'; //import the path of InputBar.js
import SearchBar from '../Components/SearchBar';

import LinearGradient from 'react-native-linear-gradient';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.route.params;
  }

  addNewTodoList() {
    let lists = this.state.lists;

    if (this.state.todoInput !== "") {
      //add new todo in the beignning of the array
      lists.unshift({
        id: lists.length,
        title: this.state.todoInput,
        list: [
          { listId: lists.length, id: 1, title: "Todo 2", done: false, date: '' },
          { listId: lists.length, id: 0, title: "Todo 1", done: false, date: '' }
        ]
      });

      //reset state after adding the new todo
      this.setState({
        todoInput: '',
        lists
      });
    }
  }

  editTodoList(item, todoEdit) {
    let lists = this.state.lists;

    //map() creates a new array then run the code block with every item in the array
    lists = lists.map((todoList) => {
      if (todoList.id == item.id) {
        todoList.title = todoEdit;
      }
      return todoList;
    })

    this.setState({ lists });
  }

  listItems(item) {
    let state = this.state;
    let todos = this.state.todos;
    let lists = this.state.lists;
    let listId = this.state.listId;

    lists = lists.map((todoList) => {
      if (todoList.id == item.id) {
        todos = todoList.list;
        listId = item.id;
      }
      return todoList;
    })

    this.setState({ listId, todos, lists },
      function () {
        state = this.state;
        this.props.navigation.navigate('Detail', state);
      });
  }

  toggleIsSearching() {
    let isSearching = !this.state.isSearching;
    this.setState({ isSearching });
  }

  //method to search for todo items
  searchTodo(str) {
    let todos = this.state.todos; //array of matched items from the last search
    let todosUnmatched = this.state.todosUnmatched; //array of unmatched items from the last search
    todos = todos.concat(todosUnmatched);

    function swap(items, leftIndex, rightIndex) {
      var tempId = items[leftIndex].id;
      var tempTitle = items[leftIndex].title;
      var tempDone = items[leftIndex].done;

      items[leftIndex].id = items[rightIndex].id;
      items[leftIndex].title = items[rightIndex].title;
      items[leftIndex].done = items[rightIndex].done;

      items[rightIndex].id = tempId;
      items[rightIndex].title = tempTitle;
      items[rightIndex].done = tempDone;
    };

    function partition(items, left, right) {
      var pivot = items[Math.floor((right + left) / 2)].id,
        i = left, //left pointer
        j = right; //right pointer
      while (i <= j) {
        while (items[i].id > pivot) {
          i++;
        }
        while (items[j].id < pivot) {
          j--;
        }
        if (i <= j) {
          swap(items, i, j); //sawpping two elements
          i++;
          j--;
        }
      }
      return i;
    };

    //quick sort descending order for todo array to maintain items order during and after search
    function quickSort(items, left, right) {
      var index;
      if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
          quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
          quickSort(items, index, right);
        }
      }
      return items;
    };

    // first call to quick sort
    todos = quickSort(todos, 0, todos.length - 1);

    todosUnmatched = []; //re-initialize todosUnmatched

    //filter unmatched items
    todosUnmatched = todos.filter((todo) => { return (!(todo.title.toLowerCase().includes(str.toLowerCase()))) });
    this.setState({ todosUnmatched });

    //filter matched items
    todos = todos.filter((todo) => { return (todo.title.toLowerCase().includes(str.toLowerCase())) });
    this.setState({ todos });
  }


  searchTodoList(str) {
    let lists = this.state.lists; //array of matched items from the last search
    let todoListsUnmatched = this.state.todoListsUnmatched; //array of unmatched items from the last search
    lists = lists.concat(todoListsUnmatched);

    function swap(items, leftIndex, rightIndex) {
      var tempId = items[leftIndex].id;
      var tempTitle = items[leftIndex].title;
      var tempList = items[leftIndex].list;

      items[leftIndex].id = items[rightIndex].id;
      items[leftIndex].title = items[rightIndex].title;
      items[leftIndex].list = items[rightIndex].list;

      items[rightIndex].id = tempId;
      items[rightIndex].title = tempTitle;
      items[rightIndex].list = tempList;
    };

    function partition(items, left, right) {
      var pivot = items[Math.floor((right + left) / 2)].id,
        i = left, //left pointer
        j = right; //right pointer
      while (i <= j) {
        while (items[i].id > pivot) {
          i++;
        }
        while (items[j].id < pivot) {
          j--;
        }
        if (i <= j) {
          swap(items, i, j); //sawpping two elements
          i++;
          j--;
        }
      }
      return i;
    };

    //quick sort descending order for todo array to maintain items order during and after search
    function quickSort(items, left, right) {
      var index;
      if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
          quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
          quickSort(items, index, right);
        }
      }
      return items;
    };

    // first call to quick sort
    lists = quickSort(lists, 0, lists.length - 1);

    todoListsUnmatched = []; //re-initialize todosUnmatched

    //filter unmatched items
    todoListsUnmatched = lists.filter((todoList) => { return (!(todoList.title.toLowerCase().includes(str.toLowerCase()))) });
    this.setState({ todoListsUnmatched });

    //filter matched items
    lists = lists.filter((todoList) => { return (todoList.title.toLowerCase().includes(str.toLowerCase())) });
    this.setState({ lists });
  }

  //method to remove a todo item
  removeTodoList(item) {
    let lists = this.state.lists;

    //filter() creates a new array and remove the item passed in
    lists = lists.filter((todoList) => { return todoList.id !== item.id });

    let i = lists.length - 1;
    lists = lists.map((todoList) => {
      todoList.id = i;
      i--;
      return todoList;
    });

    this.setState({ lists }, function () { console.log(this.state.lists) });
  }

  relabelIds() {
    let lists = this.state.lists;

    let i = lists.length - 1;
    lists = lists.map((todoList) => {
      todoList.id = i;
      i--;
      return todoList;
    });

    this.setState({ lists });
    //console.log(this.state);
  }

  backToHome() {
    let state = this.state;
    this.searchTodo('');
    //console.log(this.state);
    this.props.navigation.navigate('Home', state);
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
        <Header title="My Lists"
          isSearching={this.state.isSearching}
          isBackVisible={false}
          toggleIsSearching={() => this.toggleIsSearching()}
          backToHome={() => this.backToHome()}
          allowReordering={() => this.allowReordering()} />


        {(this.state.isSearching) ?
          (
            <SearchBar
              searchTodo={(str) => this.searchTodoList(str)}
              allowReordering={() => this.allowReordering()}
            />) : (

            /*call this textChange prop in InputBar and pass in todoInput, ie. text change */
            <InputBar
              textChange={todoInput => this.setState({ todoInput })}
              addNewTodo={() => this.addNewTodoList()}
              allowReordering={() => this.allowReordering()}
            />
          )
        }

        <View style={styles.listContainer}>



          <FlatList
            data={this.state.lists} // get the todos array
            keyExtractor={(item, index) => index.toString()} // provide key index as a string; have to specify it due to no default key value
            renderItem={({ item, index }) => { // render an item from data
              return (
                <TodoList
                  todoList={item}
                  listItems={() => this.listItems(item)}
                  removeTodoList={() => this.removeTodoList(item)}
                  editTodoList={todoEdit => this.editTodoList(item, todoEdit)}
                />
              )
            }
            }
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
    paddingBottom: '5%'
  }
});
