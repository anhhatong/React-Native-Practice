import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: { //customize the header bar
        backgroundColor: "#E9B210",
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 700
    },
    title: { //customize the title
        color: '#fff',
        fontSize: 30,
        fontFamily: "Gill Sans",
        fontWeight: '800',
        letterSpacing: 3,
        textTransform: 'uppercase',
        paddingBottom: '10%'
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-start',
        width: '90%',
        marginTop: '2%'
    }
});

export default styles;
