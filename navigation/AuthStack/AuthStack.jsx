import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../../screens/login';
import CreateAccount from '../../screens/CreateAccount/CreateAccount';


const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='LogIn' component={LoginScreen}/>
      <Stack.Screen name='CreateAccount' component={CreateAccount}/>
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})