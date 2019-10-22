import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native'

class RadioButtons extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: null
    }
  }

  render () {
    const { options } = this.props
    const { value } = this.state
    return (
      <View style={styles.buttonContainer}>
        {options.map(item => {
          return (
            <View key={item.id} style={styles.button}>
              <TouchableOpacity
                style={styles.circle}
                onPress={() => {
                  this.setState({ value: item.id })
                }}
              >
                {value === item.id && <View style={styles.checkedCircle} />}
              </TouchableOpacity>
              <Text style={styles.textButton}>{item.text} </Text>
            </View>
          )
        })}
      </View>
    )
  }
}

var dimension = {
  width: Dimensions.get('window').width / 2,
  height: Dimensions.get('window').height / 3
}

const styles = StyleSheet.create({
  buttonContainer: {
    // borderColor: 'black',
    // borderWidth: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  button: {
    padding: 1,
    width: '20%',
    borderWidth: 1,
    borderColor: '#ACACAC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  circle: {
    marginTop: 3,
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkedCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#737373'
  },
  textButton: {
    marginTop: 5,
    width: '100%',
    minHeight: 40,
    textAlign: 'center'
  }
})

export default RadioButtons
