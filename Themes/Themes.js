import React from 'react'
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native' 
import { Button } from 'react-native-elements';
import colors from './Colors.js'
import { CheckBox } from 'react-native-elements'

const styles = StyleSheet.create({
    main: {
      color: colors['text'],
      fontWeight: 'bold',
      fontSize: 60,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        
      },

    h2 : {
      color: colors['text'],
      fontWeight: 'bold',
      fontSize: 35,
      fontSize: 60,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10
    },

    btext: {
      color: colors['text'],
      fontSize: 20,
      fontSize: 60,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10
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
        return(<View style={styles.container, backgroundColor='black'}>{this.props.children}</View>)
    }
}

class Checky extends React.PureComponent {
    render() {
        return(<CheckBox
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            uncheckedColor={colors['secondary']}
            checkedColor={colors['primary']}
            backgroundColor = 'black'
            checked={this.props.checked}
            containerStyle = {{borderRadius: 10, borderWidth : 2, borderColor : 'gold', flex: .1}}
            textStyle = {{color : colors, fontWeight : 'bold'}}
          />)
    }
}

class CButton extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TouchableOpacity style={{backgroundColor:'grey', flex: .9, textAlign :"center", justifyContent: 'center', 
            alignContent : 'center', 
            justifyContent:'space-around',
            borderWidth : 1,
            borderRadius : 8
            }}
            onPress = {this.props.onPress}
            >
                <Text style={{fontSize: 20, color: colors['text']}}>{this.props.text}</Text>
             </TouchableOpacity>
        )
    }
}

class SButton extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style ={{flexDirection : 'row', marginTop: 15}}>
                <Button color={colors['tertiary']}
                    title={this.props.title} 
                    titleStyle={{color : colors['primary']}}
                    buttonStyle={{backgroundColor : colors['tertiary']}}
                    type = "outline"
                    onPress = {this.props.onPress}
                    containerStyle={{flex : .99
                                    }}
                    >
                </Button>
            </View>
        )
    }
}




export {TitleText, RootContainer, BodyText, PTitle, Checky, SButton, CButton}