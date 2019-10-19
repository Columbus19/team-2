import React from 'react';
import { TitleText, BodyText, PTitle, RootContainer, Checky, SButton, CButton } from '../Themes/Themes.js';
import { StackActions, NavigationActions } from 'react-navigation';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';
import colors from '../Themes/Colors.js'

function Separator() {
  return <View style={styles.separator} />;
}

export default class LearningAcademy extends React.Component {
  constructor(props) {
    super(props);
    this.props.navigation.setParams({ 'onecheck': false, 'twocheck': false, 'threecheck': false, 'fourcheck': false });
  }

  render() {
    return (

      <View style={{flex: 1, justifyContent: 'space-around', backgroundColor: colors['bgcolor']}}>
        <PTitle text="Learning Academy" style={{ flex: .1 }} />

        <View style={{ flexDirection: "row" }}>
          <Checky checked={this.props.navigation.getParam('onecheck')}></Checky>
          <CButton text="Application" onPress={() => { this.props.navigation.navigate('Application1'); this.props.navigation.setParams({ 'onecheck': true }) }}></CButton>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Checky checked={this.props.navigation.getParam('twocheck')}></Checky>
          <CButton text="Training Session" onPress={() => { this.props.navigation.navigate('TrainingVideo'); this.props.navigation.setParams({ 'twocheck': true }) }}></CButton>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Checky checked={this.props.navigation.getParam('threecheck')}></Checky>
          <CButton text="Mock Interviews" onPress={() => { this.props.navigation.navigate('MockInterviews'); this.props.navigation.setParams({ 'threecheck': true }) }}></CButton>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Checky checked={this.props.navigation.getParam('fourcheck')}></Checky>
          <CButton text="Resume Template and Review" onPress={() => { this.props.navigation.navigate('ResumeTemplates'); this.props.navigation.setParams({ 'fourcheck': true }) }}></CButton>
        </View>

    </View>
 );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
