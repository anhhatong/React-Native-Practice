import React from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import initialState from '../../redux/store/initialState';
import styles from './styles';

export default class SignupScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    hasWhiteSpace(s) {
        return s.indexOf(' ') >= 0;
    }

    render() {
        return (
            <LinearGradient
                colors={['#D1C2C2', '#fff', '#D1C2C2']}
                style={styles.container}>

                <Text style={styles.fontTitle}>Create Account</Text>

                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => {
                        if (!this.hasWhiteSpace(username)) {
                            return this.setState({ username });
                        }
                    }}
                    label='Username'
                    placeholder='Username'
                    style={styles.input}
                    maxLength={30}
                    blurOnSubmit={true}
                />

                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    label='Password'
                    secureTextEntry={true}
                    placeholder='Password'
                    style={styles.input}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.saveInfo}>
                    <Text style={styles.font}>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}><Text style={styles.signUp}>Back to Log in</Text></TouchableOpacity>
            </LinearGradient>

        );
    }

    saveInfo = async () => {
        let state = this.state;
        let data = initialState.data;
        if (state.username === '' && state.password === '') {
            alert("Please enter username and password");
        } else if (state.username === '') {
            alert("Please enter username");
        } else if (state.password === '') {
            alert("Please enter password");
        } else if (state.username.length < 5 && state.password.length < 8) {
            alert("Username must be at least 6 characters long\nPassword must be at least 8 characters long");
        } else if (state.username.length < 5) {
            alert("Username must be at least 6 characters long");
        } else if (state.password.length < 8) {
            alert("Password must be at least 8 characters long");
        } else {
            try {
                let keys = []
                try {
                    keys = await AsyncStorage.getAllKeys()
                } catch (e) {
                    alert("Error");
                }

                for (let i = 0; i < keys.length; i++) {
                    if (keys[i] !== "persist:root") {
                        if (JSON.parse(keys[i]).username === this.state.username) {
                            alert("Username has already existed");
                            return;
                        }
                    }
                }
                const jsonValue = JSON.stringify(state);
                const jsonValueData = JSON.stringify(data);
                await AsyncStorage.setItem(jsonValue, jsonValueData);
                this.props.navigation.navigate('Login');
            } catch (e) {
                alert("Save error. Try again!");
            }
        }
    }
}
