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
      <View style= {{justifyContent: 'center', alignContent: 'center'}}>
          <TitleText text="Resume Templates"/>        

          <SButton title="View Resume Templates"
                onPress={() => { Linking.openURL('https://templates.office.com/en-us/resumes-and-cover-letters')}}
                />
      </View>
    );
  }
    handlePress = () => {
        if(Platform.OS === 'ios'){
           //IOS
           OpenFile.openDoc([{
             url:"https://omextemplates.content.office.net/support/templates/en-us/tf00002102.docx",
             fileNameOptional:"./../assets/resume.docx"
           }], (error, url) => {
              if (error) {
                console.error(error);
              } else {
                console.log(url)
              }
            })
         }else{
           //Android
           OpenFile.openDoc([{
             url:"https://omextemplates.content.office.net/support/templates/en-us/tf00002102.docx", // Local "file://" + filepath
             fileName:"./../assets/resume.docx",
             cache:false,
             fileType:"docx"
           }], (error, url) => {
              if (error) {
                console.error(error);
              } else {
                console.log(url)
              }
            })
         }
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