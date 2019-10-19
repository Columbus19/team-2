import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import { Button, ThemeProvider } from 'react-native-elements';

export default class Sign2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={select_styles.header}>
          <Text style={select_styles.header_text}>Who are you?</Text>        
        </View>
        <View style={select_styles.view}>
          <Button title="Student" style={select_styles.buttons}></Button>
        </View>
        <View style={select_styles.view}>
          <Button title="Alumni" style={select_styles.buttons}></Button>
        </View>
        <View style={select_styles.view}>
          <Button title="Client" style={select_styles.buttons}></Button>
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