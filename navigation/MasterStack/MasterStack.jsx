import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { supabase } from '../../lib/supabase';
import AuthStack from '../AuthStack';
import MainStack from '../MainStack'
import LoginScreen from '../../screens/Auth/login';
import CreateAccount from '../../screens/Auth/CreateAccount/CreateAccount';


const Stack = createNativeStackNavigator()

const MasterStack = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    
    const {
        session,
        user
    } = useContext(AuthContext)

    // console.log('session', session)

    // async function isLoggedIn() {
    //     const { data: { user } } = await supabase.auth.getUser(); 
    //     console.log(user)
    //     return !!user; // Returns true if a user is logged in, otherwise false
    //   }

//     const { data } = supabase.auth.onAuthStateChange((event, session) => {
//   console.log(event, session)

//   if (event === 'INITIAL_SESSION') {
//     // handle initial session
//   } else if (event === 'SIGNED_IN') {
//     // handle sign in event
//   } else if (event === 'SIGNED_OUT') {
//     // handle sign out event
//   } else if (event === 'PASSWORD_RECOVERY') {
//     // handle password recovery event
//   } else if (event === 'TOKEN_REFRESHED') {
//     // handle token refreshed event
//   } else if (event === 'USER_UPDATED') {
//     // handle user updated event
//   }
// })

  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            // headerTitle: (props) => <Image source={MHLogo}/> 
        }}
    >
        { 
            !user ? 
                <Stack.Screen name='AuthStack' component={AuthStack}/> 
            : 
                <Stack.Screen name='MainStack' component={MainStack}/> 
        }
         
    </Stack.Navigator>
  )
}

export default MasterStack

const styles = StyleSheet.create({})