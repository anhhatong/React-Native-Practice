import React, { Component } from 'react';
import {
    View,
    Platform
} from 'react-native';
import AddNewScreenHeader from '../../Components/AddEditTodoHeader'; //import the path of Header.js
import AddNewInputBar from '../../Components/AddEditTodoInput'; //import the path of AddNewInputBar.js
import styles from './styles';

import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { editList } from '../../redux/actions/actions';

const mapStateToProps = (state) => ({ state: state.todos.data });

const mapDispatchToProps = (dispatch) => {
    return {
        editList: (title) => dispatch(editList(title))
    }
}

class EditListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = props.state;
    }

    //method to add more todos to the array of todos
    save() {
        let todoInput = this.state.todoInput;

        if (todoInput != '') {
            this.props.editList(todoInput);
            this.props.navigation.goBack();
        } else {
            alert("Please enter todo");
        }
    }


    render() {
        const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>; //platform-specific for the status bar on top
        return (



            <LinearGradient
                colors={['#D1C2C2', '#fff']}
                style={styles.container}>
                {/*display status bar on top*/}
                {statusbar}

                {/*render the Header here to pass this string to Header class */}
                <AddNewScreenHeader
                    title="Edit List"
                    save={() => this.save()}
                    cancel={() => this.props.navigation.goBack()}
                />
                <View style={styles.listContainer}>

                    <AddNewInputBar
                        todoInput={this.state.todoInput}
                        textChange={todoInput => this.setState({ todoInput })}

                    />

                </View>

            </LinearGradient>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditListScreen);