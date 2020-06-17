import React from 'react';
import { Text, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { retrieveData, logIn } from '../../redux/actions/actions';
import styles from './styles';

const mapStateToProps = (state) => ({ state: state.todos.data });

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveData: (data, userInfo) => dispatch(retrieveData(data, userInfo)),
        logIn: () => dispatch(logIn())
    }
}

class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <LinearGradient
                colors={['#D1C2C2', '#fff', '#D1C2C2']}
                style={styles.container}>

                <Text style={styles.fontTitle}>Todoapp</Text>

                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    label='Username'
                    placeholder='Username'
                    maxLength={30}
                    blurOnSubmit={true}
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
                    onPress={this.getInfo}>
                    <Text style={styles.font}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Signup') }}><Text style={styles.signUp}>Create account</Text></TouchableOpacity>
            </LinearGradient>

        );
    }

    getInfo = async () => {
        let state = this.state;
        if (state.username === '' && state.password === '') {
            alert("Please enter username and password");
        } else if (state.username === '') {
            alert("Please enter username");
        } else if (state.password === '') {
            alert("Please enter password");
        } else {
            try {
                const jsonValue = JSON.stringify(state);
                const jsonValueData = await AsyncStorage.getItem(jsonValue);
                const data = JSON.parse(jsonValueData);
                //await AsyncStorage.removeItem(jsonValue);
                if (jsonValueData != null) {
                    this.props.retrieveData(data, state);
                    this.props.logIn();
                    this.props.navigation.navigate('Home');
                } else {
                    alert("Wrong username or password");
                }
            } catch (e) {
                alert("Load error. Try again.");
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);