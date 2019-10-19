import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Sign from './Sign.js';
import Sign2 from './Sign2.js';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  SignP: {
      screen: Sign
  },
  SignType: { 
      screen: Sign2
  }
}, {initialRouteName: "SignP"});



export default createAppContainer(AppNavigator);