import React from 'react';
import {TitleText, BodyText, PTitle,RootContainer, Checky, SButton, CButton} from '../Themes/Themes.js';
import { StackActions, NavigationActions } from 'react-navigation';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';
import colors from '../Themes/Colors.js'

function Separator() {
  return <View style={styles.separator} />;
}

export default class LearningAcademy extends React.Component {
    componentDidMount() {
      
    }

    render(){
    return (

    <View style={{flex: 1, justifyContent: 'space-around', backgroundColor: colors['bgcolor']}}>
      <TitleText text = "Application Checklist" style={{flex: .1}} />
      
        <View style={{flexDirection:"row"}}>
              <Checky></Checky>
                <CButton text="Application" onPress={() => {this.props.navigation.navigate('Application1')}}></CButton>
        </View> 

        <View style={{flexDirection:"row"}}>
              <Checky></Checky>
                <CButton text="Training Session" onPress={() => {this.props.navigation.navigate('TrainingVideo')}}></CButton>
        </View> 

        <View style={{flexDirection:"row"}}>
              <Checky></Checky>
                <CButton text="Mock Interviews" onPress={() => {this.props.navigation.navigate('MockInterviews')}}></CButton>
        </View> 
        
        <View style={{flexDirection:"row"}}>
              <Checky></Checky>
                <CButton text="Resume Template and Review" onPress={() => {this.props.navigation.navigate('ResumeTemplates')}}></CButton>
        </View> 

    </View>
 );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
