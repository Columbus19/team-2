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

export default class Alumni extends React.Component {
  componentDidMount() {
 
  }

  render() {
  return (
    
    <SafeAreaView style={styles.container}>
      <TitleText text="Alumni Homepage"> 
      </TitleText>

      <Separator />
      <View>
        <SButton
          title="Let students know you are ready to review resumes."
          color="#f194ff"
          onPress={() => {this.props.navigation.navigate('ResumeConfirmation')}}
        />
      </View>
      <Separator />
      <View>
        <SButton
          title="Mock Interviews"
          color="#f194ff"
          onPress={() => {this.props.navigation.navigate('MockInterviewsAlumni')}}
        />
      </View>
      <Separator />       
    </SafeAreaView>
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
