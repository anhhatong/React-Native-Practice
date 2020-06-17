import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

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

export default connect(mapStateToProps)(UserInfoDisplay);
