import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#DEE2EC',
        color: "#444444",
        fontSize: 20,
        fontFamily: 'Gill Sans',
        padding: '3%',
        borderBottomWidth: 3,
        borderColor: '#FF9636',
        marginBottom: '3%',
        width: '80%',
        borderRadius: 20
    },
    font: {
        fontSize: 20,
        fontFamily: 'Gill Sans',
        color: '#fff'
    },
    button: {
        backgroundColor: '#880C25',
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingLeft: '7%',
        paddingRight: '7%',
        borderRadius: 20,
        marginBottom: '10%'
    },
    fontTitle: {
        color: "#fff",
        fontSize: 35,
        fontFamily: 'Gill Sans',
        paddingBottom: "30%",
        fontWeight: '700',
        letterSpacing: 1
    },
    signUp: {
        color: '#286bd7',
        fontSize: 20,
        fontFamily: 'Gill Sans'
    }
});

export default styles;