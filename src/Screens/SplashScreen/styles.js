import { StyleSheet } from 'react-native';
import { font } from '../../assets';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: { //customize the title
      color: '#fff',
      fontSize: 30,
      fontFamily: font,
      fontWeight: '800',
      letterSpacing: 3,
      textTransform: 'uppercase'
    }
  });

export default styles;