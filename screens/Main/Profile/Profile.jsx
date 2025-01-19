import { StyleSheet, Text, View, Pressable } from 'react-native'
import React ,{useContext, useEffect}from 'react'
import { useNavigation } from '@react-navigation/native'
import { supabase } from '../../../lib/supabase'


//Context
import { AuthContext } from '../../../context/AuthProvider/AuthProvider'
import { PostsContext } from '../../../context/PostsProvider/PostsProvider'

//Componants
import ReuseableButton from '../../../componants/ReusableButton'
import PostComponant from '../../../componants/PostComponant'

const Profile = () => {

    const { 
        signOutUser, 
        user 
    } = useContext(AuthContext)

    const {
        singleUsersPosts,
        setSingleUsersPosts
        
    } = useContext(PostsContext)

    const navigation = useNavigation()

    const firstName = user.user_metadata.first_name

    
    const onSignOutPress = () => {
        signOutUser()
    }

    const onPostsPagePress = () => {
        console.log('onPostsPagePress')
        navigation.navigate('Posts')
    }
 
   
    const posts = singleUsersPosts.map((single, i) => {
        const { id, user_post } = single
        return (
          <PostComponant
            key={i}
            user_post={user_post}
            // style={styles.post}
          />
        )
      })


//   const channel2 = supabase
//         .channel('table-db-changes')
//         .on(
//             'postgres_changes',
//             {
//                 event: '*',
//                 // schema: 'public',
//                 table: 'posts',
//             },
//                (payload) => {
//                 return setSingleUsersPosts([...singleUsersPosts, payload.new])
//                }
//         )
//         .subscribe()

  return (
    <View style={styles.root}>
      <Text style={styles.header}>Welcome {firstName}</Text>
      {posts}
      <View style={styles.buttonContainer}>
        <View style={styles.cont}>
            <Pressable >
                <Text 
                    style={styles.pressableText}
                    onPress={onPostsPagePress}
                >
                    Go To Posts
                </Text>
            </Pressable>
        </View>
            <ReuseableButton
            text='Log Out'
            onPress={onSignOutPress}
            />
        </View>
    </View>
  )
}

export default Profile

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
    fontSize: 35,
    margin: '5%'
    // position: 'absolute',
    // top: 25
  },
  buttonContainer: {
    width: '100%',
    height: '10%',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '10%'
  },
  pressableText: {
    fontSize: 15,
    color: '#74886C',
    fontWeight: 'bold',
  },
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    padding: 15,
    borderColor: '#3C5B47',
    borderWidth: 2,
    borderRadius: 150,
  }
  })