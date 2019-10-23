import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import store from './Store'

class RadioButtons extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: null
    }
  }

  selectDigit = (id)=>{
    this.setState({ value: id })
    store.dispatch({
      type:'selectDigit',
      digit:id
    })

  }

  render () {
    const { options } = this.props
    const { value } = this.state
    return (
      <View style={styles.row}>
        {options.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.buttonContainer}
              key={item.id}
              onPress={() => this.selectDigit(item.id)}
            >
              <View key={item.id} style={styles.circle}>
                {value === item.id && <View style={styles.checkedCircle} />}
              </View>
              <Text>{item.text}</Text>
            </TouchableOpacity>
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
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  buttonContainer: {
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    minWidth: '20%',
    borderWidth: 2,
    borderColor: 'hsla(223, 12%, 89%, 1)',
    flexDirection: 'column'
  },
  setBorder: {
    borderColor: 'hsla(223, 12%, 89%, 1)'
  },
  setActiveBorder: {
    borderColor: 'rgb(76, 154, 255);'
  },
  circle: {
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
  }
})

export default RadioButtons
