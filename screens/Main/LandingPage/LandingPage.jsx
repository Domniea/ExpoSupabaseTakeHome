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
    user,
    emailAddress
  } = useContext(AuthContext)

  const {
    allUsersPosts,
    setAllUsersPosts
  } = useContext(PostsContext)

  // console.log('All Users Posts landing page', allUsersPosts)

  const {
    control,
    handleSubmit
  } = useForm()

  const navigation = useNavigation()

  const submitPost = (data) => {

  }




  async function onSubmitPress (res) {

    const { data, error } = await supabase
    .from('posts')
    .insert([{email: emailAddress, user_post: res.post}])

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
        // style={styles.post}
      />
    )
  })


  // const channel1 = supabase
  //         .channel('table-db-changes')
  //         .on(
  //             'postgres_changes',
  //             {
  //                 event: '*',
  //                 // schema: 'public',
  //                 table: 'posts',
  //             },
  //                (payload) => {
  //                 return setAllUsersPosts([...allUsersPosts, payload.new])
  //                }
  //         )
  //         .subscribe()



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
      style={styles.footer}
      />
          {posts}
      <View style={styles.pressableContainer}>
        <Pressable >
            <Text 
              style={styles.pressableText}
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
    width: '100%',
    // padding: '10%',
    backgroundColor: '#FFF'
},
header: {
  position: 'absolute',
  top: 25,
  fontSize: 25
},

post: {
  flex: 1,
  height: '30%',
  backgroundColorcolor: 'green'
},
footer: {
  fontSize: 20,
  color: '#74886C',
  // borderColor: 'black',
  // borderWidth: 2,
  // borderRadius: 150,
  width: '100%',
  // paddng: 15
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
}
})