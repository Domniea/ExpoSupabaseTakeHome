import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../../context/AuthProvider/AuthProvider'

//Componant
import RInput from '../../componants/RTextInput'
import RButton from '../../componants/ReusableButton'


const CreateAccount = () => {

    const {
        test
    } = useContext(AuthContext)

console.log(test)

    const navigation = useNavigation()

    const {
        control,
        handleSubmit
    } = useForm()

    const onGoBackPress = () => {
        console.log('back')
        navigation.goBack()
    }

  return (
    <View style={styles.root}>
        <Text style={styles.header}>CreateAccount</Text>
        <View style={styles.login}>
            <RInput
                control={control}
                name='email'
                placeholder='email'
            />
            <RButton
                text='Sign Up'
            />

        </View>
        <Pressable
            style={styles.footer}
        >
            <Text 
                style={styles.footer}
                onPress={onGoBackPress}
            >
                Go Back
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