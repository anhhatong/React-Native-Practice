import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ state: state.todos.info });

class UserInfoDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={styles.username}>{"@"+this.props.state.username}</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    username: {
        color: "#000",
        fontSize: 20,
        fontFamily: 'Gill Sans',
        paddingBottom: "30%",
        fontWeight: 'bold',
        marginTop: '10%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
  })

export default connect(mapStateToProps)(UserInfoDisplay);
