import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, WebView } from 'react-native'
import Header from './Header'
import Sum from './Sum'
import RadioButtons from './RadioButtons'
import * as Constants from '../Constants'
import SumOperation from './SumOperation'

class Simulator extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.containerRadioButtons}>
          <RadioButtons options={Constants.options} />
        </View>
        <SumOperation />
        <Text>Maths </Text>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white'
  },
  containerRadioButtons: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})

export default Simulator
