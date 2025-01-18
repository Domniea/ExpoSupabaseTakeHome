import { Alert, StyleSheet, Text, View, AppState } from 'react-native'
import React, { useState, createContext, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
// import { Button, Input } from '@rneui/themed'

const AuthContext = createContext()

const AuthProvider = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [ session, setSession ]= useState(false)
  const [user,setUser] = useState()

  // async function getUser() {
  //   const { data, error } = await supabase.auth.getUserIdentities()
  //   console.log(data)
  //   setUser(data)

    
  // }

// getUser(0)

  async function signInWithEmail(email, password) {
    setLoading(true)
    const { error, data } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if(data) {
      setSession(data.session)
    }

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail(email, password, firstName, lastName) {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    })

    
    if(session) {
      setSession(session)
    }
    
    
    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }
    
  async function signOutUser() {
      const { error} = supabase.auth.signOut()
      
      setSession(false)
      if (error) Alert.alert(error.message)
      
  }

  async function isLoggedIn() {
    const { data: { user } } = await supabase.auth.getUser(); 
    setUser(user)
    return !!user; // Returns true if a user is logged in, otherwise false
}

  useEffect(()=> {
    isLoggedIn()
  },[session])
  
  return (
    <AuthContext.Provider
        value={{
            signUpWithEmail,
            signInWithEmail,
            signOutUser,
            session,
            user
        }}
    >
        {props.children}
    </AuthContext.Provider
    >
  )
}

export { AuthContext, AuthProvider }

const styles = StyleSheet.create({})