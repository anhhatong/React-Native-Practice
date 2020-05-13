import React from "react";
import {StyleSheet, Text, Button, TouchableOpacity, View, TextInput} from "react-native";
import Swipeout from 'react-native-swipeout';
import { CheckBox } from 'react-native-elements';

export default class TodoItem extends React.Component {
  
  //use constructor(props) and super(props) to initialize this.prop, which is to get access to fields in the parent class
  constructor(props){
    super(props);
  }
  
  render() {
    const todoItem = this.props.todoItem; //get todoItem from prop
    
    let swipeBtns = [{
                     text: 'Edit',
                     backgroundColor: '#FFCD58'
                     },
                     {
                     text: 'Delete',
                     backgroundColor: '#FF5C4D',
                     onPress: () => { this.props.removeTodo() }
                     }
                     ];
    
    return (
            <View style={styles.itemContainer}>
            <Swipeout right={swipeBtns}
            autoClose='true'
            backgroundColor= 'transparent'>
            <TouchableOpacity
            onPress={() => this.props.toggleDone()}
            style={(todoItem.done) ? styles.todoItemDone : styles.todoItem}>
            
            <CheckBox
            checked={todoItem.done}
            checkedColor="#1D741B"
            uncheckedColor="#fff"
            onPress={() => this.props.toggleDone()}
            />
            
            <TextInput
            value={todoItem.title}
            onChangeText={(todoEdit) => this.props.editTodo(todoEdit)}
            autoFocus
            style={(todoItem.done) ? {color: "#444444", fontSize: 16, fontFamily: 'Gill Sans'} : {color: "#fff", fontSize: 16, fontFamily: 'Gill Sans'}}
            />
            
            </TouchableOpacity>
            </Swipeout>
            
            </View>
            )
  }
}

const styles= StyleSheet.create({
                                todoItem: {
                                flex: 1,
                                flexDirection: "row", //texts aligned horizontally
                                justifyContent: "flex-start", //texts aligned on two ends
                                alignItems: 'center',
                                width: '90%',
                                paddingTop: '2%',
                                paddingRight: '25%',
                                paddingBottom: '2%',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                borderTopLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                backgroundColor: "#FF9636"
                                },
                                
                                todoItemDone: {
                                flex: 1,
                                flexDirection: "row", //texts aligned horizontally
                                justifyContent: "flex-start", //texts aligned on two ends
                                alignItems: 'center',
                                width: '90%',
                                paddingTop: '2%',
                                paddingBottom: '2%',
                                paddingRight: '25%',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                borderTopLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                backgroundColor: "#DAD870"
                                },
                                itemContainer: {
                                marginTop: "5%"
                                }
                                });

