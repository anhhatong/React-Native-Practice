import { StyleSheet } from 'react-native';
import { statusbarStyle, font, tab } from '../../assets';

const styles = StyleSheet.create({
    container: { //fill
        flex: 1, //how much an item occupies available space on screen
    },
    statusbar: statusbarStyle,
    listContainer: tab.listContainer,
    font: {
        fontFamily: font,
        fontSize: 28,
        paddingLeft: '5%',
        color: '#880C25',
        letterSpacing: 2,
        fontWeight: "bold"
    },
    textContainer: tab.textContainer
});

export default styles;