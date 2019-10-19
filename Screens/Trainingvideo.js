import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native';
import {TitleText, BodyText, PTitle,RootContainer, Checky, SButton} from '../Themes/Themes.js';
import colors from '../Themes/Colors.js'

class MyWeb extends Component {
  render() {
    return (
      <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={({})}
      />
    );
  }
}

export default class Trainingvideo extends Component {
  render() {
    return (
        <View style={{ height: 675, backgroundColor: colors['bgcolor'], alignContent: 'center',  }}>

            <View style={{marginBottom: 15, marginTop: 5}}>
              <PTitle text="Complete 2 Trainings!"></PTitle>
            </View>

            <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/VWx3vsg9fVI' }}
            />
            <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/ALhr8aW6l0M' }}
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
});
