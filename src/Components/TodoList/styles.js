import { StyleSheet } from 'react-native';
import { font } from '../../assets';

const styles = StyleSheet.create({
    todoItem: {
        width: '90%',
        paddingTop: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingBottom: '5%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: "#AB9786"
    },
    text: {
        color: "#fff",
        fontSize: 18,
        fontFamily: font,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    itemContainer: {
        marginTop: '5%'
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default styles;