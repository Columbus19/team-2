import React from 'react'
import {Text, StyleSheet, View} from 'react-native' 
import { Button } from 'react-native-elements';
import colors from './Colors.js'
import { CheckBox } from 'react-native-elements'

const styles = StyleSheet.create({
    main: {
      textAlign :
       "center",
      color: colors['primary'],
      fontWeight: 'bold',
      fontSize: 60,
      marginTop: -40
    },

    container: {
        flexWrap : "wrap",
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
      
      },

    h2 : {
      color: colors['primary'],
      fontWeight: 'bold',
      fontSize: 35,
    },

    btext: {
      color: colors['primary'],
      fontSize: 20,
    }
});


class TitleText extends React.PureComponent {
    constructor(props) {
        super();
    }

    render() {
        return(
            <Text style={styles.main}> {this.props.text} </Text>
        )
    }
}


class BodyText extends React.PureComponent {
    constructor(props) {
        super();
    }

    render() {
        return(
            <Text style={styles.btext}> {this.props.text} </Text>
        )
    }
}

class PTitle extends React.PureComponent {
    constructor(props) {
        super();
    }

    render() {
        return(
            <Text style={styles.h2}> {this.props.text} </Text>
        )
    }
}

class RootContainer extends React.PureComponent {
    render () {
        return(<View style={styles.container}>{this.props.children}</View>)
    }
}

class Checky extends React.PureComponent {
    render() {
        return(<CheckBox
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            uncheckedColor='blue'
            checkedColor='gold'
            backgroundColor = 'black'
            checked={this.props.checked}
            containerStyle = {{borderRadius: 10, borderWidth : 2, borderColor : 'gold'}}
            textStyle = {{color : 'blue', fontWeight : 'bold'}}
          />)
    }
}

class SButton extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style ={{flexDirection : 'row'}}>
                <Button color="gold" 
                    title={this.props.title} 
                    titleStyle={{color : colors['primary']}}
                    buttonStyle={{backgroundColor : 'gold'}}
                    type = "outline"
                    onPress = {this.props.onPress}
                    containerStyle={{flex : 1
                                    }}>
                </Button>
            </View>
        )
    }
}


export {TitleText, RootContainer, BodyText, PTitle, Checky, SButton}