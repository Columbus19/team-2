import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignInit from './Screens/SignInit.js';
import SignType from './Screens/SignType.js';
import MockInterviews from './Screens/MockInterviews.js';
import TrainingVideos from './Screens/TrainingVideos.js';
import MockInterviewsAlumni from './Screens/MockInterviewsAlumni.js'
import ResumeTemplate from './Screens/ResumeTemplate.js'

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
  Application: {
    screen: Application
  },
  MockInterviewsAlumni: {
    screen: MockInterviewsAlumni
  },
  TrainingVideos: {
    screen: TrainingVideos
  },
  ResumeTemplate: {
    screen: ResumeTemplate
  },
}, {initialRouteName: "SignInit"});



export default createAppContainer(AppNavigator);
