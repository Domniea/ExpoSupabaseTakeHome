import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

import ReusableInput from '../../../componants/ReusableInput'
import ReusableButton from '../../../componants/ReusableButton'

const LoginScreen = () => {

    const {
       control,
       handleSubmit,
       reset
    } = useForm()

    const navigation = useNavigation()

    const onSubmitPress = (data) => {
      console.log('onSubmitPress')
        console.log(data)
        reset()
    }

    const onCreateAccountPress = () => {
      console.log('onCreateAccountPress')
      navigation.navigate('CreateAccount')
    }

    return (
        <View style={styles.root}>
          <Text style={styles.header}>User Login</Text>
          <View style={styles.login}>
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
        width: '80%',
        margin: 25
      }
    });
    
    export default LoginScreen