import { StyleSheet } from 'react-native';
import { font } from '../../assets';

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        marginRight: '5%',
        marginLeft: '5%'
    },
    input: {
        fontSize: 25,
        color: '#444444',
        borderColor: "#5C0601",
        borderBottomWidth: 2,
        fontFamily: font,
        fontWeight: '100',
        height: '25%',
        paddingLeft: '5%',
        borderRadius: 0,
        backgroundColor: '#fff'
    }
})

export default styles;