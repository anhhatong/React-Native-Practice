import { StyleSheet } from 'react-native';
import { statusbarStyle, editListContainer } from '../../assets';

const styles = StyleSheet.create({
    container: { //fill
        flex: 1, //how much an item occupies available space on screen
    },
    statusbar: statusbarStyle,
    listContainer: editListContainer
});

export default styles;