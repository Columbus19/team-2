import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import select_styles from './Styles'

export default function App() {
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

const theme = {
  Button: {
    titleStyle: {
      color: 'red',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
