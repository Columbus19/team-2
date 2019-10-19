import React, { Component } from 'react';
import {TitleText, BodyText, PTitle,RootContainer, Checky, SButton} from '../../Themes/Themes.js';
import { StyleSheet, TouchableHighlight, Text, View, Image, TextInput, ScrollView, Picker } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import { Button, ThemeProvider } from 'react-native-elements';

export default class Application1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {first_name: '', last_name: '', email: '', confirm_email: '',
                  username: '', password: '', confirm_password: '',
                  year: '', major: '', gpa: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <PTitle text="Application Form">Application Form </PTitle>
        </View>
        <ScrollView contentContainerStyle={styles.scroll}>
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
          <Picker
              style={signin_style.picker}
              placeholder="Freshman"
              value={this.state.year}>
              <Picker.Item label = "Freshman" value = "freshman" />
              <Picker.Item label = "Sophomore" value = "sophomore" />
              <Picker.Item label = "Junior" value = "junior" />
              <Picker.Item label = "Senior" value = "senior" />
          </Picker>
          <TextInput
              style={signin_style.input}
              placeholder="Intended Major"
              onChangeText={(major) => this.setState({major})}
              value={this.state.major}
          />
          <TextInput
              style={signin_style.input}
              placeholder="GPA"
              onChangeText={(gpa) => this.setState({gpa})}
              value={this.state.gpa}
          />
        </ScrollView>
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
  picker: {
    justifyContent: 'flex-end'
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
    justifyContent: 'flex-start',
  },
  scroll: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
