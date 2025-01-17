import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from '../AuthStack';
import MainStack from '../MainStack'
import LoginScreen from '../../screens/Auth/login';
import CreateAccount from '../../screens/Auth/CreateAccount/CreateAccount';


const Stack = createNativeStackNavigator()

const MasterStack = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    
    const {
        session
    } = useContext(AuthContext)

    console.log(session)
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            // headerTitle: (props) => <Image source={MHLogo}/> 
        }}
    >
        { 
            !session ? 
                <Stack.Screen name='AuthStack' component={AuthStack}/> 
            : <Stack.Screen name='MainStack' component={MainStack}/> 
        }
         
    </Stack.Navigator>
  )
}

export default MasterStack

const styles = StyleSheet.create({})