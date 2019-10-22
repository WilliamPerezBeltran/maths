import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, WebView } from 'react-native'
import Header from './Header'
import Sum from './Sum'

class Simulator extends React.Component {
  render () {
    return (
      <View style={styles.container}>
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
  }
})

export default Simulator
