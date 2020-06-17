import React from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';

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

export default AddNewTodoBtn;
