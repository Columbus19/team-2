import React from 'react'
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native' 
import { Button } from 'react-native-elements';
import colors from './Colors.js'
import { CheckBox } from 'react-native-elements'

const styles = StyleSheet.create({
    main: {
      color: colors['primary'],
      fontWeight: 'bold',
      fontSize: 60,
    },

    container: {
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
            containerStyle = {{borderRadius: 10, borderWidth : 2, borderColor : 'gold', flex: .1}}
            textStyle = {{color : 'blue', fontWeight : 'bold'}}
          />)
    }
}

class CButton extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TouchableOpacity style={{backgroundColor:"gold", flex: .9, textAlign :"center", justifyContent: 'center', alignContent : 'center',
            }}
            onPress = {this.props.onPress}
            >
                <Text style={{fontSize: 20, color: 'blue'}}>{this.props.text}</Text>
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




export {TitleText, RootContainer, BodyText, PTitle, Checky, SButton, CButton}