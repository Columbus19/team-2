import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Image, TextInput} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import { Button, ThemeProvider } from 'react-native-elements';
import {TitleText, RootContainer, BodyText, PTitle, Checky, SButton} from '../Themes/Themes.js';
import colors from '../Themes/Colors.js'

export default class SignInit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }

  render() {
    return (
      <View style={styles.container}>
            <TitleText text="Sign In" />      
          <TextInput
              style={signin_style.input}
              placeholder="Username"
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
          />
          <TextInput
              style={signin_style.input}
              placeholder="Password"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
          />
          <SButton title="Sign In" onPress = { () => {this.props.navigation.navigate('LearningAcademy')}}></SButton>
              <TouchableHighlight style={signin_style.hightlight} onPress = { () => {this.props.navigation.navigate('SignType')}}>
            <Image
              style={signin_style.image}
              source={require('./../assets/linkedin.png')}
            />
          </TouchableHighlight>
      </View>
    );
  }
}
const signin_style = StyleSheet.create({
  image: {
    marginTop: 25,
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
    marginTop: 10,
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
    marginTop: -50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: colors['bgcolor']
    //#3B3A69
    //#2E2C47
  },
});