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
import SearchBar from './ios/SearchBar.js';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    FlatList // list in react native
} from 'react-native';

export default class App extends React.Component {
    constructor () { // when we have a constructor, super() must be called to initialize "this"
        super();
        this.state = {
        todoEdit: '',
        searchStr: '',
        todoInput: '',
        todos: [
                {id: 0, title:"Todo 1", done:false},
                {id: 1, title:"Todo 2", done:false}
                ]
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
    
    searchTodo(str) {
        let todos = this.state.todos;
        let todosMatch=[];
        
        todos = todos.map((todo)=>{
                          if (todo.title.includes(str)) {
                          todosMatch.unshift(todo);
                          console.log(todosMatch);
                          }
                          return todosMatch;
                          })
        
        return todos;
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
        
        //filter() creates a new array and remove the item passed in
        todos = todos.filter((todo)=>{ return todo.id !== item.id });
        
        this.setState({todos});
    }
    
    //main method
    render() {
        const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>; //platform-specific for the status bar on top
        
        return (
                <View style={styles.container}>
                {/*display status bar on top*/}
                {statusbar}
                <SearchBar
                searchTodo={(str) => this.searchTodo(str)}
                />
                
                {/*render the Header here to pass this string to Header class */}
                <Header title="ToDoApp"/>
                
                {/*call this textChange prop in InputBar and pass in todoInput, ie. text change */}
                <InputBar
                textChange={todoInput => this.setState({todoInput})}
                addNewTodo={() => this.addNewTodo()}
                />
                <View style={styles.listContainer}>
                {/* Added todos are recorded and displayed on screen*/}
                <FlatList
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
                />
                </View>
                </View>
                );
    }
}

const styles = StyleSheet.create({
                                 container: { //fill
                                 flex: 1, //how much an item occupies available space on screen
                                 backgroundColor: '#FFE6B5',
                                 },
                                 statusbar: {//status bar on top
                                 backgroundColor: "#FFCD58",
                                 height: 40
                                 },
                                 listContainer: {
                                 flex:1,
                                 borderTopLeftRadius: 130,
                                 backgroundColor: "#fff"
                                 }
                                 });
