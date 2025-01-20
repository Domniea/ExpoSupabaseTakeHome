import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
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
    user,
    emailAddress
  } = useContext(AuthContext)

  const {
    getAllUsersPosts,
    allUsersPosts,
    setAllUsersPosts
  } = useContext(PostsContext)


  const {
    control,
    handleSubmit,
    reset
  } = useForm()

  const navigation = useNavigation()

  const submitPost = (data) => {

  }




  async function onSubmitPress (res) {

    const { data, error } = await supabase
      .from('posts')
      .insert([{email: emailAddress, user_post: res.post}])

      reset()

    if(error){
      console.error('error inserting data:', error)
    }
    else {
      console.log('Data successfully inserted:', data)
    }
  }

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
        id={id}
      />
    )
  })
 2
    useEffect(() => {
        getAllUsersPosts()
    
        const channel1 = supabase
            .channel('chanel1')
            .on(
                'postgres_changes',
                {
                    event: '*',
                    // schema: 'public',
                    table: 'posts',
                },
                  (payload) => {
                    return setAllUsersPosts([...allUsersPosts, payload.new])
                  }
            )
            .subscribe()
    
        return () => supabase.removeChannel(channel1)
    
    }, [allUsersPosts.length])


  return (
    <View style={styles.root}>
      
      <ReusableInput
        control={control}
        name='post'
        placeholder='New Post'
        />
 
      <ReuseableButton
      text='Submit Post'
      onPress={handleSubmit(onSubmitPress)}
      />
      <ScrollView style={styles.scrollView}>
        {posts}
      </ScrollView>
          
        <Pressable 
          style={styles.pressableContainer}
          onPress={onGoToProfilePress}
        >
            <Text 
              style={styles.pressableText}
            >
                Go To Profile Page
            </Text>
        </Pressable>

    </View>
  )
}

export default LandingPage

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // padding: '10%',
    backgroundColor: '#FFF'
  },
  header: {
    position: 'absolute',
    top: 25,
    fontSize: 25
  },
  scrollView: {
    width: '100%',
    margin: 20,
    padding: '5%',
    borderColor: '#ADAD98',
    borderWidth: 3,
    borderRadius: 15
  },
  post: {
    flex: 1,
    height: '30%',
    backgroundColorcolor: 'green'
  },
  pressableText: {
    fontSize: 15,
    color: '#74886C',
    fontWeight: 'bold'
  },
  pressableContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    padding: 15,
    borderColor: '3C5B47',
    borderWidth: 2,
    borderRadius: 150,
  },
})