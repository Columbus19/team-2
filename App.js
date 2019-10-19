import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
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
import BasicFlatList from './Screens/BasicFlatList.js'
import Application1 from './Screens/Application/Application1.js';
import colors from './Themes/Colors.js'
import ResumeConfirmation from './Screens/ResumeConfirmation.js';
import ResumeReview from './Screens/ResumeReview.js';



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
      screen: SignInit,
      navigationOptions : {header: null}
  },
  SignType: { 
      screen: SignType,
      navigationOptions: {header: null}
  },
  MockInterviews: {
      screen: MockInterviews,
  },
  // Application: {
  //   screen: Application
  // },
  MockInterviewsAlumni: {
    screen: MockInterviewsAlumni,
    navigationOptions : {header: null}
  },
  TrainingVideo: {
    screen: TrainingVideo
  },
  Alumni: {
    screen: Alumni
  },
  LearningAcademy: {
    screen: LearningAcademy,
    navigationOptions : {header: null}
  },
  ResumeTemplates: {
    screen: ResumeTemplates
  },
  Application1: {
    screen: Application1
  },
  ResumeConfirmation: {
    screen: ResumeConfirmation
  },
  ResumeReview: {
    screen: ResumeReview
  },
  Client: {
      screen: BasicFlatList 
  }
  
}, {initialRouteName: "SignInit",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors['primary'],
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitle: (
        <View style={{flexDirection: "row"}}>
          <Image source={require('./assets/images/splash3.png')}
                style={{
                  width:50,
                  height:50,
                  resizeMode:'cover'
                }}/>
          <Text style={{fontSize : 30, color: 'gold', fontWeight: 'bold'}}> INROADS </Text>
         </View>
      )
    }
});





export default createAppContainer(AppNavigator);
