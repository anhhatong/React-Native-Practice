import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import styles from './styles';

const DatePicker = (props) => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };


  return (
    <View style={styles.inputContainer}>


      <TouchableOpacity onPress={showDatePicker}>
        <View style={styles.button}>
          <Text style={styles.font}> Due Date </Text>
          <Text style={styles.dateFont}> {moment(props.currentDate).format("dddd, MMM D YYYY") === 'Invalid date' ? '' : moment(props.currentDate).format("dddd, MMM D YYYY")} </Text>
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        //minimumDate={new Date()}
        onConfirm={(date) => props.dateChange(date)}
        onCancel={hideDatePicker}
      />


    </View>
  )
}

export default DatePicker;


