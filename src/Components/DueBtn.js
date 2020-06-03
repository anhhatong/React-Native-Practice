import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';

const DueBtn = (props) => {
  return (
    <TouchableOpacity
    style={styles.container}
    onPress={props.toggle}>

    <Text style={props.label=='Overdue'? styles.fontOverdue : props.label == 'Due Today'? styles.font:styles.fontDueTomorrow}>{props.label}</Text>
    <Icon 
      name= {props.isDropping? 'chevron-up' : 'chevron-down'}
      type='feather'
      color='#DEE2EC'/>  
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth :1,
    borderColor: '#DEE2EC',
    paddingTop: '2%',
    paddingBottom: '2%',
    marginTop: '5%',
    marginRight: '5%',
    marginLeft: '5%'
  },
  font: {
    fontFamily: 'Gill Sans',
    fontSize: 28,
    paddingLeft: '5%',
    color: "#ff9636"
},
fontOverdue: {
  fontFamily: 'Gill Sans',
  fontSize: 28,
  paddingLeft: '5%',
  color: '#880C25'
},
fontDueTomorrow: {
  fontFamily: 'Gill Sans',
  fontSize: 28,
  paddingLeft: '5%',
  color: '#ffc933'
}
});

export default DueBtn;
