import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: { //customize the header bar
        backgroundColor: "#E9B210",
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 700
    },
    title: {
        color: '#fff',
        fontSize: 15,
        fontFamily: "Gill Sans",
        fontWeight: '700',
        paddingBottom: '2%',
        paddingLeft: '10%',
        paddingRight: '10%'
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: '2%'
    }
});

export default styles;