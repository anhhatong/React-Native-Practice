import { StyleSheet } from 'react-native';
import { font } from '../../assets';

const styles = StyleSheet.create({
    header: { //customize the header bar
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 700
    },
    title: { //customize the title
        color: '#fff',
        fontSize: 30,
        fontFamily: font,
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
