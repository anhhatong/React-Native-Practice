import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

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
          <Text style={styles.dateFont}> {moment(props.currentDate).format("dddd, MMM D YYYY") === 'Invalid date'? '' : moment(props.currentDate).format("dddd, MMM D YYYY")} </Text>
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

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    marginRight: '5%',
    marginLeft: '5%'
  },
  dateFont: {
    fontSize: 20,
    color: '#444444',
    fontFamily: 'Gill Sans',
    fontWeight: '100',
    letterSpacing: 1
  },
  font: {
    color: "#880C25",
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Gill Sans',
    textTransform: 'uppercase'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: '5%',
    paddingBottom: '5%',
    backgroundColor: '#D1C2C2'
  }
})

export default DatePicker;


