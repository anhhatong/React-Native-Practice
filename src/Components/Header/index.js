import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Header = (props) => { //props is an argument passed from parent App.js
  return (
    <LinearGradient
      colors={['#FFCD58', '#FF9636']}
      style={styles.header}>

      {/* pass string title from App.js */}
      <View style={!props.isBackVisible ? styles.iconContainer : styles.iconContainerNoMenu}>

        {!props.isBackVisible &&
          <Icon
            name='menu'
            type='feather'
            color='#fff'
            onPress={props.openDrawer}
          />
        }

        <Icon
          name={(props.isSearching) ? 'playlist-add' : 'search'}
          type={(props.isSearching) ? 'MaterialIcons' : 'feather'}
          color='#fff'
          onPress={props.toggleIsSearching} />


      </View>
      {(props.isBackVisible) ?
        <Text style={styles.listTitle}
          adjustsFontSizeToFit>{props.listTitle} </Text> :
        <Text style={styles.title}>{props.title} </Text>
      }

      <View style={styles.icon}>
        {(props.isBackVisible) ?
          <Icon
            name='chevron-left'
            type='feather'
            color='#fff'
            onPress={props.backToList} /> : <Icon />
        }
      </View>

    </LinearGradient>
  )
}

export default Header; //App.js can now access Header class
