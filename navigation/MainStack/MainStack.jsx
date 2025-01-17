import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingPage from '../../screens/Main/LandingPage';
import Profile from '../../screens/Main/Profile';

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='LandingPage' component={LandingPage}/>
      <Stack.Screen name='Profile' component={Profile}/>
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})