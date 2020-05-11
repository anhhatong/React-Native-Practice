import React from "react";
import {StyleSheet, Text, Button, TouchableOpacity, CheckBox} from "react-native";

export default class TodoItem extends React.Component {
  
  //use constructor(props) and super(props) to initialize this.prop, which is to get access to fields in the parent class
  constructor(props){
    super(props);
  }
  
  render() {
    const todoItem = this.props.todoItem; //get todoItem from prop
    
    return (
            <TouchableOpacity
              onPress={() => this.props.toggleDone()}
              style={(todoItem.done) ? styles.todoItemDone : styles.todoItem}>
            
            <Text style={(todoItem.done) ? {color: "#444444", fontSize: 16, fontFamily: 'Gill Sans'} : {color: "#fff", fontSize: 16, fontFamily: 'Gill Sans'}}>
              {todoItem.title}
            </Text>
            
            <Button
              title = "Remove"
              color = "#fff"
              onPress={() => this.props.removeTodo()}
            />
            
            </TouchableOpacity>
    )
  }
}

const styles= StyleSheet.create({
    todoItem: {
        flex: 1,
        flexDirection: "row", //texts aligned horizontally
        justifyContent: "space-between", //texts aligned on two ends
        alignItems: 'center',
        width: '90%',
        paddingLeft: '2%',
        paddingTop: '2%',
        paddingBottom: '2%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '5%',
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: "#FF9636"
    },
                                
    todoItemDone: {
    flex: 1,
    flexDirection: "row", //texts aligned horizontally
    justifyContent: "space-between", //texts aligned on two ends
    alignItems: 'center',
    width: '90%',
    paddingLeft: '2%',
    paddingTop: '2%',
    paddingBottom: '2%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#DAD870"
    }
});

