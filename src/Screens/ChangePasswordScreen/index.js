import React, { Component } from 'react';
import {
    View,
    Platform
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import PasswordInput from '../../Components/PasswordInput';
import AddNewScreenHeader from '../../Components/AddEditTodoHeader';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { changePassword } from '../../redux/actions/actions';
import styles from './styles';

const mapStateToProps = (state) => ({ state: state.todos });

const mapDispatchToProps = (dispatch) => {
    return {
        changePassword: (password) => dispatch(changePassword(password))
    }
}

class ChangePasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordInput: ''
        }
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props !== prevProps) {
            this.setState({ passwordInput: '' });
        }
    }

    save = async () => {
        let passwordInput = this.state.passwordInput;
        let prevInfo = this.props.state.info;
        let newInfo = {
            username: this.props.state.info.username,
            password: passwordInput
        };
        //let data = this.state.data;
        if (passwordInput === '' || passwordInput == null) {
            alert("Please set password");
        } else if (passwordInput.length < 8) {
            alert("Password must be at least 8 characters long");
        } else {
            try {
                const jsonValue = JSON.stringify(prevInfo);
                await AsyncStorage.removeItem(jsonValue);
                const jsonValueNewInfo = JSON.stringify(newInfo);
                const jsonValueData = JSON.stringify(this.props.state.data);
                await AsyncStorage.setItem(jsonValueNewInfo, jsonValueData);
                this.props.changePassword(passwordInput);
                this.setState({ passwordInput: '' });
                this.props.navigation.goBack();
            } catch (e) {
                console.log("Save error. Try again.");
            }
        }
    }

    render() {
        const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>; //platform-specific for the status bar on top
        return (
            <LinearGradient
                colors={['#D1C2C2', '#fff']}
                style={styles.container}>
                {statusbar}
                <AddNewScreenHeader
                    title="Change Password"
                    save={() => this.save()}
                    cancel={() => { this.setState({ passwordInput: '' }); this.props.navigation.goBack() }} />

                <PasswordInput
                    passwordInput={this.state.passwordInput}
                    textChange={passwordInput => this.setState({ passwordInput })} />

                <View style={styles.listContainer}>

                </View>
            </LinearGradient>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordScreen);


