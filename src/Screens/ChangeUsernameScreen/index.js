import React, { Component } from 'react';
import {
    View,
    Platform
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import UsernameInput from '../../Components/UsernameInput.js';
import AddNewScreenHeader from '../../Components/AddNewScreenHeader.js';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { changeUsername } from '../../redux/actions/actions';
import styles from './styles';

const mapStateToProps = (state) => ({ state: state.todos });

const mapDispatchToProps = (dispatch) => {
    return {
        changeUsername: (username) => dispatch(changeUsername(username))
    }
}

class ChangeUsernameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameInput: props.state.info.username
        }
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props !== prevProps) {
            this.setState({ usernameInput: this.props.state.info.username });
        }
    }

    save = async () => {
        let usernameInput = this.state.usernameInput;
        let prevInfo = this.props.state.info;
        let newInfo = {
            username: usernameInput,
            password: this.props.state.info.password
        };
        // let data = this.state.data;
        if (usernameInput === '' || usernameInput == null) {
            alert("Please set username");
        } else if (usernameInput.length < 5) {
            alert("Username must be at least 6 characters long");
        } else {
            if (prevInfo.username === usernameInput) {
                this.props.navigation.goBack();
                return;
            }
            let keys = []
            try {
                keys = await AsyncStorage.getAllKeys();
            } catch (e) {
                alert("Error");
            }

            for (let i = 0; i < keys.length; i++) {
                if (keys[i] !== "persist:root") {
                    if (JSON.parse(keys[i]).username === usernameInput) {
                        alert("Username has already existed");
                        return;
                    }
                }
            }

            try {
                const jsonValue = JSON.stringify(prevInfo);
                await AsyncStorage.removeItem(jsonValue);
                const jsonValueNewInfo = JSON.stringify(newInfo);
                const jsonValueData = JSON.stringify(this.props.state.data);
                await AsyncStorage.setItem(jsonValueNewInfo, jsonValueData);
                this.props.changeUsername(usernameInput);
                this.props.navigation.goBack();

            } catch (e) {
                alert("Save error. Try again.");
            }
        }
    }

    hasWhiteSpace(s) {
        return s.indexOf(' ') >= 0;
    }

    render() {
        const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>; //platform-specific for the status bar on top
        return (
            <LinearGradient
                colors={['#D1C2C2', '#fff']}
                style={styles.container}>
                {statusbar}
                <AddNewScreenHeader
                    title="Change Username"
                    save={() => this.save()}
                    cancel={() => { this.setState({ usernameInput: this.props.state.info.username }); this.props.navigation.goBack(); }} />

                <UsernameInput
                    usernameInput={this.state.usernameInput}
                    textChange={(usernameInput) => {
                        if (!this.hasWhiteSpace(usernameInput)) {
                            return this.setState({ usernameInput });
                        }
                    }} />

                <View style={styles.listContainer}>


                </View>
            </LinearGradient>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeUsernameScreen);


