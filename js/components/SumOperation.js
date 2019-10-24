import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView,
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native'
import Header from './Header'
import Sum from './Sum'
import RadioButtons from './RadioButtons'
import * as Constants from '../Constants'
import InputVoice from './InputVoice'
import store from './Store'

class SumOperation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      a: '?',
      b: '?',
      result: '',
      voiceResult: ''
    }

    store.subscribe(() => {
      this.setState({
        a: store.getState().a,
        b: store.getState().b,
        result: store.getState().result,
        voiceResult: store.getState().voiceResult
      })
    })
  }

  render () {
    let signAnswer = null
    console.log('a: ' + this.state.a)
    console.log('b: ' + this.state.b)
    console.log('result: ' + this.state.result.length)
    console.log('voiceResult: ' + this.state.voiceResult.length)
    if (
      this.state.result.length === 0 ||
      this.state.voiceResult.length === 0 ||
      this.state.voiceResult === undefined ||
      this.state.voiceResult === '?'
    ) {
      signAnswer = <Text style={styles.text}>?</Text>
    } else if (this.state.result === this.state.voiceResult) {
      signAnswer = <Text style={styles.textRight}>✓</Text>
    } else {
      signAnswer = <Text style={styles.textWrong}>+</Text>
    }

    return (
      <View>
        <View style={styles.container}>
          <View style={styles.numberBox}>
            <Text style={styles.text}>{this.state.a}</Text>
          </View>
          <View style={styles.signBox}>
            <Text style={styles.text}>+</Text>
          </View>
          <View style={styles.numberBox}>
            <Text style={styles.text}>{this.state.b}</Text>
          </View>
          <View style={styles.signBox}>
            <Text style={styles.text}>=</Text>
          </View>
          <View style={styles.answerBox}>
            <Text style={styles.text}>{this.state.voiceResult}</Text>
          </View>
          <View style={styles.answerBox}>{signAnswer}</View>
        </View>
      </View>
    )
  }
}

const dimension = {
  width: Dimensions.get('window').width / 4,
  height: Dimensions.get('window').height / 2
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  numberBox: {
    width: dimension.width,
    height: dimension.width,
    borderColor: '#B8B8B8',
    borderWidth: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10
  },
  box: {
    width: dimension.width,
    height: 50,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  textRight: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'green'
  },
  textWrong: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#e71d36',
    transform: [{ rotate: '42deg' }]
  },
  input: {
    width: '50%',
    height: 40,
    borderColor: '#B8B8B8',
    borderWidth: 2
  }
})

export default SumOperation
