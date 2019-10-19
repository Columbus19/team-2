import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import { Button, ThemeProvider } from 'react-native-elements';
import {TitleText, RootContainer, BodyText, PTitle, Checky, SButton} from '../Themes/Themes.js';
import { StackActions, NavigationActions } from 'react-navigation';
import colors from '../Themes/Colors.js'

export default class SignType extends React.Component {
  render() {
    return (
      <RootContainer>
          <TitleText text="Who are you?"></TitleText>

          <SButton title="Student"
          onPress={() => {
            this.props.navigation.navigate('LearningAcademy')
            /*const resetAction = StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: 'LearningAcademy' })],
            });
            this.props.navigation.dispatch(resetAction); */
          }}
          />
 
          <SButton title="Alumni"
            onPress={() => {this.props.navigation.navigate('Alumni')}}
            /*const resetAction = StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: 'LearningAcademy' })],
            });
            this.props.navigation.dispatch(resetAction); */
          />

          <SButton title="Client" onPress={() => {this.props.navigation.navigate('Client')
          /*const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'LearningAcademy' })],
              });
              this.props.navigation.dispatch(resetAction); */}}/>

      </RootContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: colors['bgcolor'],
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const select_styles = StyleSheet.create({
  buttons: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  view: {
      flex: 2,
      },
  header: {
      flex: 1,
      justifyContent: 'center',
  },
  header_text: {
      color: 'black',
      fontSize: 30,
  }
});
