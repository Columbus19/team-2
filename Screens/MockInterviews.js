import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import { Button, ThemeProvider, Header, Image } from 'react-native-elements';


export default class MockInterviews extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: 'Mock Interviews', style: {color: '#fff'}}}
        />
        <Image
          source={{ uri: 'assets/skype.png'}}
          style={{width:50, height:50}}
        />
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
  header: {
    fontSize: 30,
    justifyContent: 'center'
  },
});
