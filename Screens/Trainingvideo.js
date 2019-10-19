import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native';

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
        <View style={{ height: 675, marginTop: 25 }}>
          <Text>Complete 2 Trainings!</Text>
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

