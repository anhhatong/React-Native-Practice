import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FIVE_SECONDS = 3000;

export default class SplashScreen extends React.Component {
  componentDidMount() {
    // When mounted, wait one second, then navigate to App
    setTimeout(() => {
      // Components that are placed inside a React Navigation
      // navigator will receive the `navigation` prop.
      // It's main usage is to trigger navigation events.
      // Right here we're telling it to navigate to the route
      // with the name 'App'.
      this.props.navigation.navigate('App');
    }, FIVE_SECONDS);
  }

  render() {
    return (
      <LinearGradient
        colors={['#D1C2C2', '#FFCD58', '#FF9636', '#D1C2C2']}
        style={styles.container}>
        <View>

          <Text style={styles.title}>
            TODOAPP
            </Text>

        </View>
      </LinearGradient>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: { //customize the title
    color: '#fff',
    fontSize: 30,
    fontFamily: "Gill Sans",
    fontWeight: '800',
    letterSpacing: 3,
    textTransform: 'uppercase'
  }
});

