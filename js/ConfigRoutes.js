import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import Simulator from './components/Simulator'

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Simulator,
      navigationOptions: {
        tabBarLabel: 'Simulador',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name='ios-home' />
          </View>)
      }
    }

  },
  {
    initialRouteName: 'Home',
    activeColor: 'white',
    inactiveColor: 'grey',
    barStyle: { backgroundColor: '#011627' }
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default createAppContainer(TabNavigator)
