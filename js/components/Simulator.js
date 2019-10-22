import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView,
  ScrollView
} from 'react-native'
import Header from './Header'
import Arithmetic from './Sum'

class Simulator extends React.Component {
  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Header />

          <View style={styles.subContainer}>
            <Sum />

            <Text> Add element </Text>
            <Text> Add element </Text>
            <Text> Add element </Text>
            <Text> Add element </Text>
            <Text> Add element </Text>
          </View>
        </View>
      </ScrollView>
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
