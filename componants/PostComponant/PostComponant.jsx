import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostComponant = (props) => {

    const {
        user_post
    } = props

  return (
    <View style={styles.root}>
      <Text>{user_post}</Text>
    </View>
  )
}

export default PostComponant

const styles = StyleSheet.create({
    root: {
        margin: 15
        // margin: 1
    }
})