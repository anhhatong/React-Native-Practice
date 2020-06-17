import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { //fill
        flex: 1, //how much an item occupies available space on screen
        backgroundColor: '#D1C2C2',
    },
    statusbar: {//status bar on top
        backgroundColor: '#FFCD58',
        height: 40
    },
    listContainer: {
        flex: 1,
        backgroundColor: "#fff",
        paddingBottom: '5%'
    },
    font: {
        fontFamily: 'Gill Sans',
        fontSize: 28,
        paddingLeft: '5%',
        color: '#ffc933',
        letterSpacing: 2,
        fontWeight: "bold"
    },
    textContainer: {
        borderBottomWidth: 1,
        borderColor: '#DEE2EC',
        paddingTop: '2%',
        paddingBottom: '2%',
        marginTop: '5%',
        marginRight: '5%',
        marginLeft: '5%'
    }
});

export default styles;