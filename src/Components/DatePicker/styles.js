import { StyleSheet } from 'react-native';

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

export default styles;