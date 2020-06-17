import { StyleSheet } from 'react-native';
import { font } from '../../assets';

const styles = StyleSheet.create({
    todoItem: {
        flex: 1,
        flexDirection: "row", //texts aligned horizontally
        justifyContent: "flex-start", //texts aligned on two ends
        alignItems: 'center',
        width: '90%',
        paddingTop: '2%',
        paddingRight: '25%',
        paddingBottom: '2%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: "#9E7300"
    },

    todoItemDone: {
        flex: 1,
        flexDirection: "row", //texts aligned horizontally
        justifyContent: "flex-start", //texts aligned on two ends
        alignItems: 'center',
        width: '90%',
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingRight: '25%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: "#DAD870"
    },
    itemContainer: {
        marginTop: "5%"
    },
    icon: {
        paddingRight: '10%',
        paddingLeft: '10%',
        paddingTop: '10%',
        paddingBottom: '10%'
    },
    listTitleContainer: {
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: '95%',
        paddingTop: '1%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    listTitleFont: {
        color: "#fff",
        fontSize: 16,
        fontFamily: font,
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingBottom: '2%'
    }
});

export default styles;