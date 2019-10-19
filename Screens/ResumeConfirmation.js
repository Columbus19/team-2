import React, { Component } from 'react';
import colors from './../Themes/Colors.js';
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
            <Text style={{ color: colors['primary'], fontWeight: 'bold', fontSize: 50, alignItems: 'center', justifyContent: 'center'}}>Students will now be able to send you their resumes.</Text>       
          </View>
      </View>
    );
  }
  
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});