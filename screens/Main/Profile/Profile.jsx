import { StyleSheet, Text, View, Pressable } from 'react-native'
import React ,{useContext, useEffect}from 'react'
import { useNavigation } from '@react-navigation/native'
import { supabase } from '../../../lib/supabase'


//Context
import { AuthContext } from '../../../context/AuthProvider/AuthProvider'
import { PostsContext } from '../../../context/PostsProvider/PostsProvider'

//Componants
import ReuseableButton from '../../../componants/ReusableButton'

const Profile = () => {

    const { 
        signOutUser, 
        user 
    } = useContext(AuthContext)

    const {
        allUserPosts
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
 

    // // Create a function to handle inserts
    // const handleInserts = (payload) => {
    // console.log('Change received!', payload)
    //  }
  
    // // Listen to inserts
    // supabase
    //     .channel('public')
    //     .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'posts' }, handleInserts)
    //     .subscribe()

  return (
    <View style={styles.root}>
      <Text style={styles.header}>Welcome {firstName}</Text>
      <View style={styles.buttonContainer}>
        <View>
            <Pressable
                style={styles.footer}
            >
                <Text 
                    onPress={onPostsPagePress}
                    style={styles.footer}
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
      justifyContent: 'space-between',
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
  footer: {
    fontSize: 25,
    color: '#74886C'
  },
  })