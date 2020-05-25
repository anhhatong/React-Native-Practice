/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import Header from './ios/Header.js'; //import the path of Header.js
import InputBar from './ios/InputBar.js'; //import the path of InputBar.js
import TodoItem from './ios/TodoItem.js'; //import the path of TodoItem.js
import TodoList from './ios/TodoList.js'; //import the path of TodoItem.js
import SearchBar from './ios/SearchBar.js';
import SplashScreen from './ios/SplashScreen.js';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    FlatList // list in react native
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

class App extends React.Component {
    constructor () { // when we have a constructor, super() must be called to initialize "this"
        super();
        this.state = {
        isSearching: false,
        todoEdit: '',
        todosUnmatched: [],
        todoListsUnmatched: [],
        searchStr: '',
        todoInput: '',
        todos: [
                {id: 1, title:"Todo 2", done:false},
                {id: 0, title:"Todo 1", done:false}
                ],
        lists: [
                {id: 1, title: "List 2", list: [
                                                {id: 1, title:"Todo 2", done:false},
                                                {id: 0, title:"Todo 1", done:false}
                                                ]},
                {id: 0, title: "List 1", list: [
                                                {id: 1, title:"Todo 2", done:false},
                                                {id: 0, title:"Todo 1", done:false}
                                                ]}
                ],
        currentScreen: 'home'
        };
    }
    
    //method to add more todos to the array of todos
    addNewTodo(){
        let todos = this.state.todos;
        
        //check if there is any input string at all
        if (this.state.todoInput !== "") {
            //add new todo in the beignning of the array
            todos.unshift({
                          id: todos.length + 1,
                          title: this.state.todoInput,
                          done: false
                          });
            
            //reset state after adding the new todo
            this.setState({
                          todoInput: '',
                          todos
                          });
        }
        
    }
    
    addNewTodoList() {
        let lists = this.state.lists;
        
        if (this.state.todoInput !== "") {
            //add new todo in the beignning of the array
            lists.unshift({
                          id: lists.length + 1,
                          title: this.state.todoInput,
                          list: [
                                 {id: 1, title:"Todo 2", done:false},
                                 {id: 0, title:"Todo 1", done:false}
                                 ]
                          });
            
            //reset state after adding the new todo
            this.setState({
                          todoInput: '',
                          lists
                          });
        }
    }
    
    backToHome(){
        this.setState({currentScreen:'home'});
    }
    
    //method to edit todos
    editTodo(item,todoEdit){
        let todos = this.state.todos;
        
        //map() creates a new array then run the code block with every item in the array
        todos = todos.map((todo)=>{
                          if (todo.id == item.id) {
                          todo.title = todoEdit;
                          }
                          return todo;
                          })
        
        this.setState({todos});
    }
    
    editTodoList(item,todoEdit){
        let lists = this.state.lists;
        
        //map() creates a new array then run the code block with every item in the array
        lists = lists.map((todoList)=>{
                          if (todoList.id == item.id) {
                          todoList.title = todoEdit;
                          }
                          return todoList;
                          })
        
        this.setState({lists});
    }
    
    listItems(item){
        let todos = this.state.todos;
        let lists = this.state.lists;
        let currentScreen = this.state.currentScreen;
        
        lists = lists.map((todoList)=>{
                          if (todoList.id == item.id) {
                          todos = todoList.list;
                          }
                          return todoList;
                          })
        
        this.setState({todos});
        this.setState({lists});
        this.setState({currentScreen:'list'});
    }
    
    toggleIsSearching() {
        let isSearching = !this.state.isSearching;
        this.setState({isSearching});
    }
    
    //method to search for todo items
    searchTodo(str) {
        let todos = this.state.todos; //array of matched items from the last search
        let todosUnmatched=this.state.todosUnmatched; //array of unmatched items from the last search
        todos = todos.concat(todosUnmatched);
        
        function swap(items, leftIndex, rightIndex){
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
            var pivot   = items[Math.floor((right + left) / 2)].id,
                                           i       = left, //left pointer
                                           j       = right; //right pointer
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
                                           todosUnmatched = todos.filter((todo)=>{ return (!(todo.title.toLowerCase().includes(str.toLowerCase())))});
                                           this.setState({todosUnmatched});
                                           
                                           //filter matched items
                                           todos = todos.filter((todo)=>{ return (todo.title.toLowerCase().includes(str.toLowerCase()))});
                                           this.setState({todos});
                                           }
                                           
                                           
                                           searchTodoList(str) {
                                           let lists = this.state.lists; //array of matched items from the last search
                                           let todoListsUnmatched=this.state.todoListsUnmatched; //array of unmatched items from the last search
                                           lists = lists.concat(todoListsUnmatched);
                                           
                                           function swap(items, leftIndex, rightIndex){
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
                                           var pivot   = items[Math.floor((right + left) / 2)].id,
                                                                          i       = left, //left pointer
                                                                          j       = right; //right pointer
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
                                                                          todoListsUnmatched = lists.filter((todoList)=>{ return (!(todoList.title.toLowerCase().includes(str.toLowerCase())))});
                                                                          this.setState({todoListsUnmatched});
                                                                          
                                                                          //filter matched items
                                                                          lists = lists.filter((todoList)=>{ return (todoList.title.toLowerCase().includes(str.toLowerCase()))});
                                                                          this.setState({lists});
                                                                          }
                                                                          
                                                                          
                                                                          //method to change 'done' state of each todo item
                                                                          toggleDone(item){
                                                                          let todos = this.state.todos;
                                                                          
                                                                          //map() creates a new array then run the code block with every item in the array
                                                                          todos = todos.map((todo)=>{
                                                                                            if (todo.id == item.id) {
                                                                                            todo.done = !todo.done;
                                                                                            }
                                                                                            return todo;
                                                                                            })
                                                                          
                                                                          this.setState({todos});
                                                                          }
                                                                          
                                                                          
                                                                          
                                                                          
                                                                          //method to remove a todo item
                                                                          removeTodo(item) {
                                                                          let todos = this.state.todos;
                                                                          let lists = this.state.lists;
                                                                          
                                                                          //filter() creates a new array and remove the item passed in
                                                                          todos = todos.filter((todo)=>{ return todo.id !== item.id });
                                                                          
                                                                          lists = lists.map((todoList)=>{
                                                                                            if (todoList.id == item.id) {
                                                                                            todoList.list = todos;
                                                                                            }
                                                                                            return todoList;
                                                                                            })
                                                                          
                                                                          this.setState({todos});
                                                                          this.setState({lists});
                                                                          }
                                                                          
                                                                          
                                                                          //method to remove a todo item
                                                                          removeTodoList(item) {
                                                                          let lists = this.state.lists;
                                                                          
                                                                          console.log(this.state.lists.length);
                                                                          
                                                                          //filter() creates a new array and remove the item passed in
                                                                          lists = lists.filter((todoList)=>{ return todoList.id !== item.id });
                                                                          
                                                                          this.setState({lists});
                                                                          }
                                                                          
                                                                          
                                                                          //main method
                                                                          render() {
                                                                          const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>; //platform-specific for the status bar on top
                                                                          
                                                                          return (
                                                                                  <LinearGradient
                                                                                  colors={['#FF9636','#fff','#D1C2C2','#fff']}
                                                                                  style={styles.container}>
                                                                                  {/*display status bar on top*/}
                                                                                  {statusbar}
                                                                                  
                                                                                  {/*render the Header here to pass this string to Header class */}
                                                                                  <Header title="ToDoApp"
                                                                                  isSearching={this.state.isSearching}
                                                                                  currentScreen={this.state.currentScreen}
                                                                                  toggleIsSearching={() => this.toggleIsSearching()}
                                                                                  backToHome={() => this.backToHome()}/>
                                                                                  
                                                                                  {(this.state.isSearching) ?
                                                                                  (
                                                                                   <SearchBar
                                                                                   searchTodo={(str) => {(this.state.currentScreen == 'home') ? this.searchTodoList(str) : this.searchTodo(str)}}
                                                                                   />) : (
                                                                                   
                                                                                   /*call this textChange prop in InputBar and pass in todoInput, ie. text change */
                                                                                   <InputBar
                                                                                   textChange={todoInput => this.setState({todoInput})}
                                                                                   addNewTodo={() => {(this.state.currentScreen == 'home') ? this.addNewTodoList() : this.addNewTodo()}}
                                                                                   />
                                                                                   )
                                                                                  }
                                                                                  
                                                                                  <View style={styles.listContainer}>
                                                                                  
                                                                                  {(this.state.currentScreen == 'home') ?
                                                                                  
                                                                                  (<FlatList
                                                                                   data={this.state.lists} // get the todos array
                                                                                   keyExtractor={(item, index) => index.toString()} // provide key index as a string; have to specify it due to no default key value
                                                                                   renderItem={({item, index}) => { // render an item from data
                                                                                   return (
                                                                                           <TodoList
                                                                                           todoList={item}
                                                                                           listItems={() => this.listItems(item)}
                                                                                           removeTodoList={() => this.removeTodoList(item)}
                                                                                           editTodoList={todoEdit => this.editTodoList(item, todoEdit)}
                                                                                           />
                                                                                           )}
                                                                                   }
                                                                                   />) :
                                                                                   
                                                                                   /* Added todos are recorded and displayed on screen*/
                                                                                   (<FlatList
                                                                                    data={this.state.todos} // get the todos array
                                                                                    keyExtractor={(item, index) => index.toString()} // provide key index as a string; have to specify it due to no default key value
                                                                                    renderItem={({item, index}) => { // render an item from data
                                                                                    return (
                                                                                            <TodoItem
                                                                                            todoItem={item}
                                                                                            toggleDone={() => this.toggleDone(item)}
                                                                                            removeTodo={() => this.removeTodo(item)}
                                                                                            editTodo={todoEdit => this.editTodo(item, todoEdit)}
                                                                                            />
                                                                                            )}
                                                                                    }
                                                                                    />)
                                                                                    
                                                                                    }
                                                                                    </View>
                                                                                    </LinearGradient>
                                                                                    );
                                                                                   }
                                                                                   }
                                                                                   
                                                                                   const RootNavigator = createSwitchNavigator({
                                                                                     App: App,
                                                                                     Splash: SplashScreen
                                                                                   }, {
                                                                                     // `initialRouteName` tells the React Navigation navigator
                                                                                     // which route to start at. If you don't specify an initial
                                                                                     // route it'll choose the first route in the navigator config.
                                                                                     // In this example we tell it to start on the 'Splash' route,
                                                                                     // otherwise it would have shown the 'App' route.
                                                                                     initialRouteName: 'Splash'
                                                                                   });
                                                                                   
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
                                                                                                                    flex:1,
                                                                                                                    borderTopLeftRadius: 130,
                                                                                                                    backgroundColor: "#fff"
                                                                                                                    }
                                                                                                                    });
export default createAppContainer(RootNavigator);
