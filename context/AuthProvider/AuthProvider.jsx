import { Alert, StyleSheet, Text, View, AppState } from 'react-native'
import React, { useState, createContext } from 'react'
import { supabase } from '../../lib/supabase'
// import { Button, Input } from '@rneui/themed'

const AuthContext = createContext()

const AuthProvider = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [ session, setSession ]= useState(false)
  

  
  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail(email, password) {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    
    if(session) {
      setSession(session)
    }
    
    
    if (error) Alert.alert(error.message)
      if (!session) Alert.alert('Please check your inbox for email verification!')
        setLoading(false)
    }
    
    
  
  return (
    <AuthContext.Provider
        value={{
            signUpWithEmail,
            signInWithEmail,
            session
        }}
    >
        {props.children}
    </AuthContext.Provider
    >
  )
}

export { AuthContext, AuthProvider }

const styles = StyleSheet.create({})