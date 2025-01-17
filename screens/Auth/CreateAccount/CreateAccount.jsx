import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../../../context/AuthProvider/AuthProvider'

//Componant
import ReusableInput from '../../../componants/ReusableInput'
import ReusableButton from '../../../componants/ReusableButton'


const CreateAccount = () => {

    const {
        signUpWithEmail,
        signInWithEmail
    } = useContext(AuthContext)



    const navigation = useNavigation()

    const {
        control,
        handleSubmit
    } = useForm()

    const onSignUpPress = (data) => {
        const { email, password } = data
    console.log(data)
    signUpWithEmail(email, password)
    }

    const onGoBackPress = () => {
        console.log('back')
        navigation.goBack()
    }

  return (
    <View style={styles.root}>
        <Text style={styles.header}>Set Up An Account</Text>
        <View style={styles.login}>
            <ReusableInput
                control={control}
                name='email'
                placeholder='email'
            />
            <ReusableInput
                control={control}
                name='password'
                placeholder='password'
            />
            <ReusableButton
                text='Sign Up'
                onPress={handleSubmit(onSignUpPress)}
            />

        </View>
        <Pressable
            style={styles.footer}
        >
            <Text 
                style={styles.footer}
                onPress={onGoBackPress}
            >
                Already A User?
            </Text>
        </Pressable>
    </View>
  )
}

export default CreateAccount

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        width: '100%',
        backgroundColor: '#FFF'
    },
   header: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 15
    },
    footer: {
        margin: 15,
        color: '#74886C'
      },
      login: {
        alignItems: 'center',
        width: '80%',
        margin: 25
      }
})