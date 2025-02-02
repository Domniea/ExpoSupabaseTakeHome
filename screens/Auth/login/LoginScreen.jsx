import { StyleSheet, Text, View, Button, TextInput, Pressable, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import React ,{ useState, useContext}from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider'

import ReusableInput from '../../../componants/ReusableInput'
import ReusableButton from '../../../componants/ReusableButton'

const LoginScreen = () => {

    const {
       control,
       handleSubmit,
    } = useForm()

    const {
      signInWithEmail
    } = useContext(AuthContext)
    
    const navigation = useNavigation()

    const onSubmitPress = (data) => {
      const { email, password } = data
      console.log(data)
      signInWithEmail(email, password)
      console.log('onSubmitPress')
    }

    const onCreateAccountPress = () => {
      console.log('onCreateAccountPress')
      navigation.navigate('CreateAccount')
    }

    return (
        <TouchableWithoutFeedback 
          onPress={Keyboard.dismiss}
          accessible={false}  
        >
          <View style={styles.root}>
           
            <Text style={styles.header}>User Login</Text>
            <View style={styles.login}>
            <KeyboardAvoidingView>
              <ReusableInput
                name='email'
                control={control}
                rules={{ required: 'Email is required' }}
                placeholder='Email'
              />
              <ReusableInput
                name='password'
                control={control}
                rules={{ required: 'Password is required' }}
                placeholder='Password'
              />
              </KeyboardAvoidingView>
              <ReusableButton
                text={'Submit'}
                onPress={handleSubmit(onSubmitPress)}
              />
            </View>
            <Pressable>
              <Text 
              style={styles.footer}
              onPress={onCreateAccountPress}
              >
                Create Account
            </Text>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      );
    }
    
    const styles = StyleSheet.create({
      root: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      },
      header: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 15
      },
      footer: {
        color: '#74886C',
        margin: 15
      },
      login: {
        alignItems: 'center',
        width: '100%',
        margin: 25
      }
    });
    
    export default LoginScreen