import React from 'react';
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
  render() {
  return (
    
    <SafeAreaView style={styles.container}>
      <Text> 
      Alumni Homepage
      </Text>

      <Separator />
      <View>
        <Button
          title="Training Session"
          color="#f194ff"
          onPress={() => {this.props.navigation.navigate('TrainingVideo')}}
        />
      </View>
      <Separator />
      <View>
        <Button
          title="Mock Interviews"
          color="#f194ff"
          onPress={() => {this.props.navigation.navigate('MockInterviews')}}
        />
      </View>
      <Separator />
        
    </SafeAreaView>
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
