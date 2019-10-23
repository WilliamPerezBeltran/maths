import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native'
import store from './Store'

class StartSum extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  sumStart=()=>{
  	console.log('inicio eel proceso de la usma ')
  	console.log()
  	const getDigitState = store.getState().digit

  	if (getDigitState == 0) {

  		const a = this.getRandomInt(0, 10);
  		const b = this.getRandomInt(0, 10);
  		const result = a + b;
  		console.log('sumstart')
  		console.log(a)
  		console.log(b)
  		console.log(result)

  		store.dispatch({
  			type: "getAgetBgetResult",
  			a: a,
  			b: b,
  			result: result
  		});
  	}

  }


  getRandomInt = (min, max) => {
  	min = Math.ceil(min);
  	max = Math.floor(max);
  	return Math.floor(Math.random() * (max - min + 1)) + min;
  };



  render () {
    return (
    	<View style={styles.container}>
    	 <TouchableOpacity
              style={styles.button}
              onPress={() => this.sumStart()}
            >
              
              <Text style={styles.text}>start sum</Text>
            </TouchableOpacity>
    	</View>
    )
  }
}

var dimension = {
	width: Dimensions.get('window').width / 4,
	height: Dimensions.get('window').height / 13
}

const styles =StyleSheet.create({
	container:{
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',

	},
	button:{
		width: dimension.width,
		height: 60,
		borderWidth: 2,
		borderColor: 'hsla(223, 12%, 89%, 1)',
		borderRadius: 5,
		backgroundColor: "#B8B8B8",
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text:{
		color:'white',
		fontWeight:'bold',
		fontSize:20,


	},

})

export default StartSum
