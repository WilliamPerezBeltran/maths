import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

class Header extends React.Component {
  render () {
    return (
      <View style={styles.appHeader}>
        <Text style={styles.textHeader}>Maths </Text>
      </View>
    )
  }
}
export default Header

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: '#011627',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: 15,
    paddingBottom: 15
  },
  appLogo: {
    width: '40%'
  },
  textHeader: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'

  }
})
