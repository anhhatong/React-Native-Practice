import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    FlatList // list in react native
} from 'react-native';
import HomeHeader from '../Components/HomeHeader'; //import the path of Header.js
import TodoItem from '../Components/TodoItem.js';

import LinearGradient from 'react-native-linear-gradient';
import moment from "moment";
import { connect } from 'react-redux';
import { toggleTodo, removeTodo, gotoEdit } from '../redux/actions/actions';

const mapStateToProps = (state) => ({ state: state.todos.data });

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (listId, todoId) => dispatch(toggleTodo(listId, todoId)),
        removeTodo: (listId, todoId) => dispatch(removeTodo(listId, todoId)),
        gotoEdit: (listId, todoId, title, currentDate) => dispatch(gotoEdit(listId, todoId, title, currentDate))
    }
}

class OverdueTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.state;
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props !== prevProps) {
            // this.state = this.props.route.params.data;
            // this.info = this.props.route.params.info;
            this.setState(this.props.state);
        }
    }

    checkOverdue() {
        let lists = this.state.lists;
        let items = [];
        let today = new Date();

        lists = lists.map((todoList) => {
            todoList.list.map((item) => {
                if (item.date != '') {
                    item.date = new Date(item.date);
                    //console.log(item.date);
                    if (!(item.date.getDate() == today.getDate() && item.date.getMonth() == today.getMonth() && item.date.getFullYear() == today.getFullYear())) {

                        if (item.date < moment()) {
                            items.unshift(item);
                        }
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
        this.props.removeTodo(item.listId, item.id);
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
                        <Text style={styles.font}>Overdue</Text>
                    </View>

                    <FlatList
                        data={this.checkOverdue()} // get the todos array
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
        backgroundColor: "#fff",
        paddingBottom: '5%'
    },
    font: {
        fontFamily: 'Gill Sans',
        fontSize: 28,
        paddingLeft: '5%',
        color: '#880C25',
        letterSpacing: 2,
        fontWeight: "bold"
    },
    textContainer: {
        borderBottomWidth: 1,
        borderColor: '#DEE2EC',
        paddingTop: '2%',
        paddingBottom: '2%',
        marginTop: '5%',
        marginRight: '5%',
        marginLeft: '5%'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(OverdueTab);