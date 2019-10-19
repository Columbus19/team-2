import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import { ThemeProvider, Button } from 'react-native-elements';
import {RootContainer, TitleText, BodyText, PTitle, Checky, SButton} from '../Themes/Themes.js'

//This is our defacto home screen. Onboarding 
export default class SignInit extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <RootContainer>
          <SButton title="Create Eit"  onPress = {() => {this.props.navigation.navigate('SignType')}}/>
          <TitleText text="Test"></TitleText>
          <PTitle text="Header 2" />
          <BodyText text="test long ass body text "/>
          <Checky></Checky>
        </RootContainer>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
