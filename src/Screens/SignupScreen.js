import React from 'react';
import { Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import initialState from '../redux/store/initialState';

export default class SignupScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
        return (
            <LinearGradient
                colors={['#D1C2C2', '#fff', '#D1C2C2']}
                style={styles.container}>

                <Text style={styles.fontTitle}>Create Account</Text>

                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    label='Username'
                    placeholder='Username'
                    style={styles.input}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#DEE2EC',
        color: "#444444",
        fontSize: 20,
        fontFamily: 'Gill Sans',
        padding: '3%',
        borderBottomWidth: 3,
        borderColor: '#FF9636',
        marginBottom: '3%',
        width: '80%',
        borderRadius: 20
    },
    font: {
        fontSize: 20,
        fontFamily: 'Gill Sans',
        color: '#fff'
    },
    button: {
        backgroundColor: '#880C25',
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingLeft: '7%',
        paddingRight: '7%',
        borderRadius: 20,
        marginBottom: '10%'
    },
    fontTitle: {
        color: "#fff",
        fontSize: 35,
        fontFamily: 'Gill Sans',
        paddingBottom: "30%",
        fontWeight: '700',
        letterSpacing: 1
    },
    signUp: {
        color: '#286bd7',
        fontSize: 20,
        fontFamily: 'Gill Sans'
    }
});
