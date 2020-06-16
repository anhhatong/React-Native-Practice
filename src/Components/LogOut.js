import React from 'react';
import {
    View,
    Button
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { logOut } from '../redux/actions/actions';
import { StackActions } from '@react-navigation/native';

const mapStateToProps = (state, ownProps) => ({ state: state.todos, ownProps: ownProps });

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
}

class LogOut extends React.Component {
    constructor(props) {
        super(props);
    }
    async saveData() {
        console.log(this.props.ownProps);
        try {
            const jsonValueInfo = JSON.stringify(this.props.state.info);
            const jsonValueData = JSON.stringify(this.props.state.data);
            await AsyncStorage.setItem(jsonValueInfo, jsonValueData);
            this.props.ownProps.nav.navigation.goBack();
            this.props.logOut();
        } catch (e) {
            alert("Save error. Try again.");
        }

    }
    render() {
        return (
            <View>
                <Button title="Log out" onPress={() => this.saveData()}></Button>
            </View>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
