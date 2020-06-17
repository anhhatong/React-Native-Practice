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
        paddingBottom: '2%'
    },
    listTitle: {
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
        marginTop: '5%'
    },
    iconContainerNoMenu: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-end',
        width: '90%',
        marginTop: '5%'
    },
    icon: {
        marginRight: 'auto',
        marginLeft: '5%',
        marginBottom: '3%'
    }
});

export default styles;