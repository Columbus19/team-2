import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Image, TextInput} from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import { Button, ThemeProvider } from 'react-native-elements';

export default class Application1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {first_name: '', last_name: '', email: '', confirm_email: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Application Form </Text>
        </View>
        <TextInput
            style={signin_style.input}
            placeholder="First Name"
            onChangeText={(first_name) => this.setState({first_name})}
            value={this.state.first_name}
        />
        <TextInput
            style={signin_style.input}
            placeholder="Last Name"
            onChangeText={(last_name) => this.setState({last_name})}
            value={this.state.last_name}
        />
        <TextInput
            style={signin_style.input}
            placeholder="E-mail"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
        />
        <TextInput
            style={signin_style.input}
            placeholder="Confirm E-mail"
            onChangeText={(confirm_email) => this.setState({confirm_email})}
            value={this.state.confirm_emial}
        />
      </View>
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
