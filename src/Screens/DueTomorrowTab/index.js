import React from 'react';
import {
    View,
    Text,
    Platform,
    FlatList // list in react native
} from 'react-native';
import HomeHeader from '../../Components/HomeHeader'; //import the path of Header.js
import TodoItem from '../../Components/TodoItem';
import styles from './styles';

import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo, gotoEdit } from '../../redux/actions/actions';

const mapStateToProps = (state) => ({ state: state.todos.data });

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (listId, todoId) => dispatch(toggleTodo(listId, todoId)),
        removeTodo: (listId, todoId) => dispatch(removeTodo(listId, todoId)),
        gotoEdit: (listId, todoId, title, currentDate) => dispatch(gotoEdit(listId, todoId, title, currentDate))
    }
}

class DueTomorrowTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.state;
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props !== prevProps) {
            this.setState(this.props.state);
        }
    }

    checkDueTomorrow() {
        let lists = this.state.lists;
        let items = [];
        let today = new Date();

        lists = lists.map((todoList) => {
            todoList.list.map((item) => {
                if (item.date != '') {
                    item.date = new Date(item.date);
                    if (item.date.getDate() - today.getDate() === 1 && item.date.getMonth() == today.getMonth() && item.date.getFullYear() == today.getFullYear()) {

                        items.unshift(item);

                    }
                }
                return item;
            })
            return todoList;
        })

        items.sort((a, b) => b.date - a.date);

        return items;
    }

    toEditScreen(item) {
        let lists = this.state.lists;

        //map() creates a new array then run the code block with every item in the array
        lists = lists.map((todoList) => {
            if (todoList.id == item.listId) {
                todoList.list = todoList.list.map((todo) => {
                    if (todo.id == item.id) {
                        this.props.gotoEdit(todoList.id, item.id, item.title, item.date);
                    }
                    return todo;
                })
            }
            return todoList;
        })

        this.props.navigation.navigate('Edit');
    }

    //method to change 'done' state of each todo item
    toggleDone(item) {
        let lists = this.state.lists;

        //map() creates a new array then run the code block with every item in the array
        lists = lists.map((todoList) => {
            if (todoList.id == item.listId) {
                todoList.list = todoList.list.map((todo) => {
                    if (todo.id == item.id) {
                        this.props.toggleTodo(todoList.id, item.id);
                    }
                    return todo;
                })
            }
            return todoList;
        })
    }

    //method to remove a todo item
    removeTodo(item) {
        let lists = this.state.lists;

        lists = lists.map((todoList) => {
            if (todoList.id == item.listId) {
                todoList.list = todoList.list.map((todo) => {
                    if (todo.id == item.id) {
                        this.props.removeTodo(todoList.id, item.id);
                    }
                    return todo;
                })
            }
            return todoList;
        })
    }

    openDrawer() {
        this.props.navigation.openDrawer();
    }

    getListTitle(item) {
        let lists = this.state.lists;
        let listTitle;

        lists = lists.map((list) => {
            if (item.listId == list.id) {
                listTitle = list.title;
            }
            return list;
        })

        return listTitle;
    }

    render() {

        const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>; //platform-specific for the status bar on top

        return (
            <LinearGradient
                colors={['#FF9636', '#fff', '#D1C2C2', '#fff']}
                style={styles.container}>
                {statusbar}

                {/*render the Header here to pass this string to Header class */}
                <HomeHeader title="TodoApp"
                    openDrawer={() => this.openDrawer()} />


                <View style={styles.listContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.font}>Tomorrow</Text>
                    </View>

                    <FlatList
                        data={this.checkDueTomorrow()} // get the todos array
                        keyExtractor={(item, index) => index.toString()} // provide key index as a string; have to specify it due to no default key value
                        renderItem={({ item, index }) => { // render an item from data
                            return (
                                <TodoItem
                                    todoItem={item}
                                    listTitle={this.getListTitle(item)}
                                    toggleDone={() => this.toggleDone(item)}
                                    removeTodo={() => this.removeTodo(item)}
                                    toEditScreen={() => this.toEditScreen(item)}
                                />
                            )
                        }
                        }
                    />
                </View>

            </LinearGradient>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(DueTomorrowTab);