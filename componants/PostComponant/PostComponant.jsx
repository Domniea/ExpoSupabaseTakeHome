import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useContext} from 'react'

import { PostsContext } from '../../context/PostsProvider/PostsProvider'

const PostComponant = (props) => {

    const {
        user_post,
        id,
        visibleDelete
    } = props

    const {
      deleteUserPost
    } = useContext(PostsContext)

    async function onDeletePress (id) {
      deleteUserPost(id)
    }

  return (
    <View style={styles.root}>
      <Text style={styles.text}>{user_post}</Text>
      {
        visibleDelete &&
        <Pressable 
        style={styles.deleteContainer}
        onPress={() => deleteUserPost(id)}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable>
  }
    </View>
  )
}

export default PostComponant

const styles = StyleSheet.create({
    root: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '87%',
    },
    text: {
      fontSize: 20,
    },
    deleteContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E6E3D9',
      borderRadius: 5,
      borderBlockColor: 'ADAD98',
      borderWidth: 1,
      padding: 3,
      height: 25
    },
    deleteText: {
      color: 'black',
      
    }
})