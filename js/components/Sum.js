import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, WebView } from 'react-native'
import Header from './Header'
import Sum from './Sum'
import RadioButtons from './RadioButtons'

const options = [
  { id: 1, text: 'Sum of a digit' },
  { id: 2, text: 'Sum of two digit' },
  { id: 3, text: 'Sum of three digit' },
  { id: 4, text: 'Sum of four digit' }
]
// const options = [
//   { id: 1, text: 'a' },
//   { id: 2, text: 'b' },
//   { id: 3, text: 'c' },
//   { id: 4, text: 'd' }
// ]

class Simulator extends React.Component {
  render () {
    return (
      <View style={styles.container}>

        <View style={styles.containerRadioButtons}>
          <RadioButtons options={options} />
        </View>

        <Text>Maths </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  subContainer: {
    padding: 10
  },
  containerRadioButtons: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Simulator
