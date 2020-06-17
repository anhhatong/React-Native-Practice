import { StyleSheet } from 'react-native';
import { statusbarStyle } from '../../assets';

const styles = StyleSheet.create({
    container: { //fill
      flex: 1, //how much an item occupies available space on screen
    },
    statusbar: statusbarStyle,
    listContainer: {
      flex: 1,
      borderTopLeftRadius: 130,
      backgroundColor: "#fff",
      paddingBottom: '5%'
    }
  });

export default styles;