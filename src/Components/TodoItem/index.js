import React from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import Swipeout from 'react-native-swipeout';
import { CheckBox } from 'react-native-elements';
import moment from "moment";
import LinearGradient from "react-native-linear-gradient";
import styles from './styles';

export default class TodoItem extends React.Component {

  //use constructor(props) and super(props) to initialize this.prop, which is to get access to fields in the parent class
  constructor(props) {
    super(props);
  }

  render() {
    const todoItem = this.props.todoItem; //get todoItem from prop
    const listTitle = this.props.listTitle;
    const isHidingListTitle = this.props.isHidingListTitle;

    let swipeBtns = [
      {
        text: 'Edit',
        backgroundColor: '#FFCD58',
        onPress: () => { this.props.toEditScreen() }
      },
      {
        text: 'Delete',
        backgroundColor: '#FF5C4D',
        onPress: () => { this.props.removeTodo() }
      }
    ];

    return (
      <View style={styles.itemContainer}>

        <Text style={{ color: "#444444", fontSize: 14, fontFamily: 'Gill Sans', marginLeft: 'auto', marginRight: '5%' }}>{moment(todoItem.date).endOf('day').fromNow() == 'Invalid date' ? '' : moment(todoItem.date).endOf('day').fromNow() + '   |   ' + moment(todoItem.date).format("dddd, MMM D YYYY")} </Text>

        <LinearGradient
          colors={isHidingListTitle ? ['#fff', '#fff'] : ['#d5cbc3', '#fff']}
          style={isHidingListTitle ? '' : styles.listTitleContainer}>
          <View >
            {!isHidingListTitle && <Text style={styles.listTitleFont}>{listTitle}</Text>}


            <Swipeout right={swipeBtns}
              autoClose={true}
              backgroundColor='transparent'>
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
                  multiline={true}
                  autoFocus={false}
                  editable={false}
                  style={(todoItem.done) ? { color: "#444444", fontSize: 16, fontFamily: 'Gill Sans', paddingRight: '5%' } : { color: "#fff", fontSize: 16, fontFamily: 'Gill Sans', paddingRight: '25%' }}
                  placeholder="Enter your todo"
                />

              </TouchableOpacity>
            </Swipeout>
          </View>
        </LinearGradient>
      </View>
    )
  }
}
