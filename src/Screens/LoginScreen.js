import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { retrieveData } from '../redux/actions/actions';

const mapStateToProps = (state) => ({ state: state.todos.data });

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveData: (data, userInfo) => dispatch(retrieveData(data, userInfo))
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
                    this.props.retrieveData(data,state); 
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
        borderColor: '#FFCD58',
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
        backgroundColor: '#5C0601',
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingLeft: '7%',
        paddingRight: '7%',
        borderRadius: 20
    },
    fontTitle: {
        color: "#fff",
        fontSize: 50,
        fontFamily: 'Gill Sans',
        paddingBottom: "30%",
        fontWeight: '800',
        letterSpacing: 3,
        textTransform: 'uppercase',
    },
    signUp: {
        color: '#286bd7',
        fontSize: 20,
        fontFamily: 'Gill Sans',
        paddingTop: '10%'
    }
});

export default connect (mapStateToProps, mapDispatchToProps) (LoginScreen);