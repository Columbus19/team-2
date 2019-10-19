import React from 'react';
import { StyleSheet, Text, View, Linking, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import { Button, ThemeProvider, Header } from 'react-native-elements';
import {TitleText, BodyText, PTitle,RootContainer, Checky, SButton} from '../Themes/Themes.js';
import colors from '../Themes/Colors.js'

export default class MockInterviews extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TitleText text="Mock Interviews for Students"></TitleText>
        <Image
          source={require('../assets/skype.png')}
          style={{width:50, height:50, marginBottom: 30, marginTop: 20}}
        />
        <SButton title="Open Skype" onPress={ ()=> { Linking.openURL('https://www.skype.com')}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors['bgcolor'],
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    justifyContent: 'center'
  },
});
