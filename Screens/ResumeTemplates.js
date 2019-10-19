import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    Linking,
    Image,
    TextInput,
    Alert,
    ActivityIndicator,
    NativeAppEventEmitter,
    DeviceEventEmitter,
    NativeModules,
    NativeEventEmitter,
    TouchableHighlight
  } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import { Button, ThemeProvider } from 'react-native-elements';
import {TitleText, RootContainer, BodyText, PTitle, Checky, SButton} from '../Themes/Themes.js';


export default class SignInit extends React.Component {
    
  render() {
    return (
      <View style={styles.container}>
          <View>
            <TitleText text="Resume Templates"></TitleText>        
          </View>
          <SButton title="View Resume Templates"
                onPress={() => { Linking.openURL('https://templates.office.com/en-us/resumes-and-cover-letters')}}
                />
          <SButton title="View Alumni Available for Resume Reviews"
                onPress={() => {this.props.navigation.navigate('ResumeReview')}}
                />
      </View>
    );
  }
}
const resume_style = StyleSheet.create({
  image: {
    width: 300,
    height: 60,
    resizeMode: 'stretch'
  },
  hightlight: {
    // width: 200, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    width: 300
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',    
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});