import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    FlatList // list in react native
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import UsernameInput from '../Components/UsernameInput.js';
import AddNewScreenHeader from '../Components/AddNewScreenHeader.js';
import AsyncStorage from '@react-native-community/async-storage';

export default class ChangeUsernameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.route.params;
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props !== prevProps) {
            this.setState(this.props.route.params);
        }
    }

    save = async () => {
        let usernameInput = this.state.usernameInput;
        let prevInfo = this.state.info;
        let newInfo = {username: usernameInput,
                        password: prevInfo.password};
        let data = this.state.data;
        if (usernameInput === '' || usernameInput == null) {
            alert("Please set username");
        } else if (usernameInput.length < 5) {
            alert("Username must be at least 6 characters long");
        } else {
            try {
                const jsonValue = JSON.stringify(prevInfo);
                await AsyncStorage.removeItem(jsonValue);
                const jsonValueNewInfo = JSON.stringify(newInfo);
                const jsonValueData = JSON.stringify(data);
                await AsyncStorage.setItem(jsonValueNewInfo, jsonValueData);
                this.props.navigation.setParams({info:newInfo});
                    console.log(this.state);
                    this.props.navigation.jumpTo('Home',this.state);
                
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
                    title="Change Username"
                    save={() => this.save()}
                    cancel={() => this.props.navigation.goBack('List', this.state)} />

                <UsernameInput
                    textChange={(usernameInput) => this.setState({ usernameInput })} />

                <View style={styles.listContainer}>


                </View>
            </LinearGradient>
        );
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
        borderTopLeftRadius: 130,
        backgroundColor: "#fff",
        marginTop: '2%',
        paddingBottom: '5%'
    }
});




