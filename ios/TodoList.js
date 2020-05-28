import React from "react";
import {StyleSheet, Text, Button, TouchableOpacity, View, TextInput} from "react-native";
import Swipeout from 'react-native-swipeout';
import { Icon } from 'react-native-elements';

export default class TodoList extends React.Component {
  
  //use constructor(props) and super(props) to initialize this.prop, which is to get access to fields in the parent class
  constructor(props){
    super(props);
  }
  
  render() {
    const todoList = this.props.todoList; //get todoItem from prop
    const drag = this.props.drag;
    const isReordering = this.props.isReordering;
    
    let swipeBtns = [
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
            backgroundColor= 'transparent'>
            <TouchableOpacity
            style={styles.todoItem}
            onPress={() => this.props.listItems()}
            onLongPress={drag}>
            
            <View style= {styles.textContainer}>
            
            {isReordering &&
            <Icon
            name='reorder'
            type='Ionicons'
            color='#fff'
            />
            }
            
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

const styles= StyleSheet.create({
                                todoItem: {
                                width: '90%',
                                paddingTop: '5%',
                                paddingRight: '5%',
                                paddingLeft: '5%',
                                paddingBottom: '5%',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                borderTopLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                backgroundColor: "#AB9786"
                                },
                                text: {
                                color: "#fff",
                                fontSize: 18,
                                fontFamily: 'Gill Sans',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                                },
                                itemContainer: {
                                marginTop: '5%'
                                },
                                textContainer: {
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center'
                                }
                                });



