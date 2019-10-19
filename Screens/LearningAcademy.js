import React from 'react';
import {TitleText, BodyText, PTitle,RootContainer, Checky, SButton} from '../Themes/Themes.js';
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

function Separator() {
  return <View style={styles.separator} />;
}

export default class LearningAcademy extends React.Component {
    componentDidMount() {
      
    }

    render(){
    return (

    <RootContainer>
      <View style={{flexDirection:"row"}}>
           
            <SButton
            title="Application"
            color="#f194ff"
            onPress={() => {this.props.navigation.navigate('Application')}}
            />
      </View>
  
      <View style={{flexDirection:"row"}}>
        <Checky></Checky>
            <SButton
            title="Training Session"
            color="#f194ff"
            onPress={() => {this.props.navigation.navigate('TrainingVideo')}}
            />
      </View>

      <View style={{flexDirection:"row"}}>
        <Checky></Checky>
            <SButton
            title="Mock Interviews"
            color="#f194ff"
            onPress={() =>{this.props.navigation.navigate('MockInterviews')}}
            />
      </View>

      <View style={{flexDirection:"row"}}>
        <Checky></Checky>
          <SButton
            title="Resume Template and Review"
            color="#f194ff"
            onPress={() => {this.props.navigation.navigate('ResumeTemplates')}}
            />
        </View>

    </RootContainer>
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
