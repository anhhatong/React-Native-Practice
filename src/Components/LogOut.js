import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { logOut } from '../redux/actions/actions';

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
                <TouchableOpacity onPress={() => this.saveData()}><Text style={styles.text}>Log out</Text></TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: "#FF5C4D",
        fontSize: 16,
        fontFamily: 'Gill Sans',
        fontWeight: '500',
        marginTop: '8%',
        marginLeft: '8%'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
