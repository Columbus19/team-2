import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignInit from './Screens/SignInit.js';
import SignType from './Screens/SignType.js';
import MockInterviews from './Screens/MockInterviews.js';
import TrainingSession from './Screens/TrainingVideos.js';

class Loader extends React.Component {
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
  MockInterviewsAlumni: {
    screen: MockInterviewsAlumni
  },
  ApplicationTemplate: {
    screen: ApplicationTemplate
  },
  MockInterviewsAlumni: {
    screen: MockInterviewsAlumni
  },
}, {initialRouteName: "SignInit"});



export default createAppContainer(AppNavigator);
