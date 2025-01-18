import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { supabase } from '../../../lib/supabase'

//Componants
import ReuseableButton from '../../../componants/ReusableButton'
import ReusableInput from '../../../componants/ReusableInput'
import PostComponant from '../../../componants/PostComponant'


import { PostsContext } from '../../../context/PostsProvider/PostsProvider'

const LandingPage = () => {

  const {
    signOutUser,
    user
  } = useContext(AuthContext)

  const {
    allUsersPosts
  } = useContext(PostsContext)

  console.log('All Users Posts landing page', allUsersPosts)

  const {
    control,
    handleSubmit
  } = useForm()

  const navigation = useNavigation()


  const onGoToProfilePress =() => {
    console.log('onGoToProfilePress')
    navigation.navigate('Profile')
  }

  const posts = allUsersPosts.map((single, i) => {
    const { id, user_post } = single
    return (
      <PostComponant
        key={i}
        user_post={user_post}
      />
    )
  })


  return (
    <View style={styles.root}>
      <Text style={styles.header}>LandingPage</Text>
      <View style={styles.post}>
        {posts}
      </View>
      <ReusableInput
        control={control}
        name='post'
        placeholder='New Post'

      />
      {/* <ReuseableButton
      text='Log Out'
      onPress={onSignOutPress}
      style={styles.footer}
      /> */}
      <View>
        <Pressable
            style={styles.footer}
        >
            <Text 
                onPress={onGoToProfilePress}
            >
                Go To Profile Page
            </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default LandingPage

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
  position: 'absolute',
  top: 25,
  fontSize: 25
},
footer: {
  margin: 15,
  color: '#74886C'
},
post: {
  height: '30%',
  backgroundColorcolor: 'green'
}
})