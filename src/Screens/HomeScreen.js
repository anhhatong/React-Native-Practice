import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    TouchableOpacity,
    FlatList // list in react native
} from 'react-native';
import HomeHeader from '../Components/HomeHeader'; //import the path of Header.js
import TodoItem from '../Components/TodoItem.js';
import DueBtn from '../Components/DueBtn';

import LinearGradient from 'react-native-linear-gradient';
import moment from "moment";


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.route.params.data;
        this.info = this.props.route.params.info;
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props !== prevProps) {
            let isShowingOverdue = false;
            let isShowingDueToday = false;
            let isShowingDueTomorrow = false;
            this.setState(this.props.route.params);
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

    checkDueToday() {
        let lists = this.state.lists;
        let items = [];
        let today = new Date();

        lists = lists.map((todoList) => {
            todoList.list.map((item) => {
                if (item.date != '') {
                    item.date = new Date(item.date);

                    if (item.date.getDate() == today.getDate() && item.date.getMonth() == today.getMonth() && item.date.getFullYear() == today.getFullYear()) {
                        items.unshift(item);
                    }
                }
                return item;
            })
            return todoList;
        })

        return items;
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
        let state = this.state;
        let todos = this.state.todos;
        let lists = this.state.lists;
        let todoId = this.state.todoId;
        let listId = this.state.listId;

        lists = lists.map((todoList) => {
            if (todoList.id == item.listId) {
                todos = todoList.list;
            }
            return todoList;
        })

        this.setState({ todos, todoId: item.id, todoInput: item.title, currentDate: item.date, listId: item.listId },
            function () {
                state = this.state;
                //console.log(this.state);
                this.props.navigation.navigate('Edit', state);
            });
    }

    //method to change 'done' state of each todo item
    toggleDone(item) {

        let lists = this.state.lists;

        //map() creates a new array then run the code block with every item in the array
        lists = lists.map((todoList) => {
            if (todoList.id == item.listId) {
                todoList.list = todoList.list.map((todo) => {
                    if (todo.id == item.id) {
                        todo.done = !todo.done;
                    }
                    return todo;
                })
            }
            return todoList;
        })

        this.setState({ lists });

    }

    //method to remove a todo item
    removeTodo(item) {
        let todos = this.state.todos;
        let lists = this.state.lists;
        let listId = this.state.listId;
        //console.log(listId);

        lists = lists.map((todoList) => {
            if (todoList.id == item.listId) {
                todoList.list = todoList.list.filter((todo) => { return todo.id !== item.id });
                let i = todoList.list.length - 1;
                todoList.list = todoList.list.map((todo) => {
                    todo.id = i;
                    i--;
                    return todo;
                });
            }
            return todoList;
        })

        this.setState({ lists });
    }

    openDrawer() {
        let state = this.state;
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
                    openDrawer={() => this.openDrawer()}/>


                <View style={styles.listContainer}>

                    <DueBtn
                        label="Overdue"
                        isDropping={this.state.isShowingOverdue}
                        toggle={() => this.setState({ isShowingOverdue: !this.state.isShowingOverdue })} />

                    {this.state.isShowingOverdue &&
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
                        />}

                    <DueBtn
                        label="Due Today"
                        isDropping={this.state.isShowingDueToday}
                        toggle={() => {this.setState({ isShowingDueToday: !this.state.isShowingDueToday });console.log(this.state);}} />

                    {this.state.isShowingDueToday &&
                        <FlatList
                            data={this.checkDueToday()} // get the todos array
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
                        />}

                    <DueBtn
                        label="Due Tomorrow"
                        isDropping={this.state.isShowingDueTomorrow}
                        toggle={() => this.setState({ isShowingDueTomorrow: !this.state.isShowingDueTomorrow })} />

                    {this.state.isShowingDueTomorrow &&
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
                        />}    
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
    }
});