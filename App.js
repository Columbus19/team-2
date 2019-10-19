import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignInit from './Screens/SignInit.js';
import SignType from './Screens/SignType.js';
<<<<<<< HEAD
import * as Font from 'expo-font';
=======
import MockInterviews from './Screens/MockInterviews.js';
>>>>>>> 2500745868aa4e5bba935b852034f948eff5c880

class Loader extends React.Component{  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  SignInit: {
      screen: SignInit
  },
  SignType: {
      screen: SignType
  },
  MockInterviews: {
      screen: MockInterviews
  },
}, {initialRouteName: "SignInit"});



export default createAppContainer(AppNavigator);
