import { StyleSheet, Text, View } from 'react-native'
import React, { useState, createContext } from 'react'


const AuthContext = createContext()

const AuthProvider = (props) => {
  return (
    <AuthContext.Provider
        value={{
            test: 'boob'
        }}
    >
        {props.children}
    </AuthContext.Provider
    >
  )
}

export { AuthContext, AuthProvider }

const styles = StyleSheet.create({})