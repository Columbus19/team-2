import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Image, TextInput} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import { ThemeProvider, Button } from 'react-native-elements';
import {RootContainer, TitleText, BodyText, PTitle, Checky, SButton} from '../Themes/Themes.js'

//This is our defacto home screen. Onboarding 
export default class SignInit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }
  render() {
    return (
<<<<<<< HEAD
      <ThemeProvider>
        <RootContainer>
          <SButton title="Create Eit"  onPress = {() => {this.props.navigation.navigate('SignType')}}/>
          <TitleText text="Test"></TitleText>
          <PTitle text="Header 2" />
          <BodyText text="test long ass body text "/>
          <Checky></Checky>
        </RootContainer>
      </ThemeProvider>
=======
      <View style={styles.container}>
          <View>
            <Text>Sign In</Text>        
          </View>
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
          <Button title="Sign In" style={signin_style.buttons}></Button>
              <TouchableHighlight style={signin_style.hightlight} onPress = { () => {this.props.navigation.navigate('SignType')}}>
            <Image
              style={signin_style.image}
              source={require('./../assets/linkedin.png')}
            />
          </TouchableHighlight>
      </View>
>>>>>>> 2500745868aa4e5bba935b852034f948eff5c880
    );
  }
}
const signin_style = StyleSheet.create({
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