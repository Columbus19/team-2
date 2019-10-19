import React from 'react';
import {TitleText, BodyText, PTitle,RootContainer, Checky, SButton} from '../Themes/Themes.js';
import {TouchableHighlight, Image, Linking, TextInput} from 'react-native';
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

function Separator() {
  return <View style={styles.separator} />;
}

export default class Alumni extends React.Component {
  componentDidMount() {
 
  }

  render() {
  return (
    
    <SafeAreaView style={styles.container}>
      <TitleText text="Alumni Homepage"> 
      </TitleText>

      <Separator />
      <View>
        <SButton
          title="Let students know you are ready to review resumes."
          color="#f194ff"
          onPress={() => {this.props.navigation.navigate('ResumeConfirmation')}}
        />
      </View>
      <Separator />
      <View>
        <SButton
          title="Mock Interviews"
          color="#f194ff"
          onPress={() => {this.props.navigation.navigate('MockInterviewsAlumni')}}
        />
      </View>
      <Separator />
              <TouchableHighlight style={signin_style.hightlight} onPress={ ()=> { Linking.openURL('https://inroads.org/support-inroads')}}>
            <Image
              style={signin_style.image}
              source={require('../assets/donatebutton.png')}
            />
          </TouchableHighlight>       
    </SafeAreaView>
  );
  }
}

const signin_style = StyleSheet.create({
  image: {
    marginTop: 25,
    width: 300,
    height: 139,
    resizeMode: 'stretch'
  },
  hightlight: {
    // width: 200, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    marginTop: 10,
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
