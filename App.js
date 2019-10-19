import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignInit from './Screens/SignInit.js';
import SignType from './Screens/SignType.js';
import MockInterviews from './Screens/MockInterviews.js';
import TrainingVideo from './Screens/TrainingVideo.js';
import MockInterviewsAlumni from './Screens/MockInterviewsAlumni.js'
import Alumni from './Screens/Alumni.js'
import LearningAcademy from './Screens/LearningAcademy.js'
import ResumeTemplates from './Screens/ResumeTemplates.js'
import Application from './Screens/Application/Application1.js'


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
  // Application: {
  //   screen: Application
  // },
  MockInterviewsAlumni: {
    screen: MockInterviewsAlumni
  },
  TrainingVideo: {
    screen: TrainingVideo
  },
  Alumni: {
    screen: Alumni
  },
  LearningAcademy: {
    screen: LearningAcademy
  },
  ResumeTemplates: {
    screen: ResumeTemplates
  },
  Application: {
    screen: Application
  },
}, {initialRouteName: "SignInit"});



export default createAppContainer(AppNavigator);
