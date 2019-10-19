import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import { Button, ThemeProvider } from 'react-native-elements';
import {TitleText, RootContainer, BodyText, PTitle, Checky, SButton} from '../Themes/Themes.js';


export default class SignType extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={select_styles.header}>
          <TitleText text="Who are you?"></TitleText>
        </View>
        <View style={select_styles.view}>
          <SButton title="Student"
          onPress={() => {this.props.navigation.navigate('LearningAcademy')}}
          />
        </View>
        <View style={select_styles.view}>
          <SButton title="Alumni"
            onPress={() => {this.props.navigation.navigate('Alumni')}}
          />
        </View>
        <View style={select_styles.view}>
          <SButton title="Client"/>
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
