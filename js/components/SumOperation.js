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

class SumOperation extends React.Component {
  render () {
    return (

      <View>
        <View>
          <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            placeholder='Element +'
            placeholderTextColor='gray'
            autoCapitalize='none'
            keyboardType='numeric'
            value='ddddddd'
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.addTag(this.state.tag)}
          >
            <Text style={styles.submitButtonText}> Add element </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>

          <View style={styles.numberBox}>
            <Text style={styles.text}>1000</Text>
          </View>
          <View style={styles.signBox}>
            <Text style={styles.text}>+</Text>
          </View>
          <View style={styles.numberBox}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.signBox}>
            <Text style={styles.text}>=</Text>
          </View>
          <View style={styles.answerBox}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.answerBox}>
            <Text style={styles.text}>✓</Text>
            <Text style={styles.text}>+</Text>
          </View>

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
    fontSize: 40,
    fontWeight: 'bold'
  },
  input: {
    width: '50%',
    height: 40,
    borderColor: '#B8B8B8',
    borderWidth: 2
  }

})

export default SumOperation
