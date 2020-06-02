import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';

const AddNewTodoBtn = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.button}>

        <View style={styles.shadow}>
          <Icon
            name='plus'
            type='feather'
            color='#fff'
            reverse={true}
            reverseColor='#fff' />
        </View>

        <Icon
          name='plus'
          type='feather'
          color='#5C0601'
          reverse={true}
          reverseColor='#fff'
          onPress={props.toAddNewTodoScreen} />

      </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  shadow: {
    position: 'absolute',
    marginLeft: '2%'
  }
});

export default AddNewTodoBtn;
