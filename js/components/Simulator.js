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
import Sum from './Sum'

class Simulator extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.containerScrollView}>
          <View style={styles.containerHeader}>
            <Header />
          </View>
          <View style={styles.maincontainer}>
            <View style={styles.containerTitle}>
              <Text style={styles.textTitle}> Practicing sum  </Text>
            </View>
            <View style={styles.containerSum}>
              <Sum />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  maincontainer: {
    padding: 10
  },
  containerScrollView: {
    // padding: 10
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15

  }

})

export default Simulator
