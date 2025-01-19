import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const ReuseableButton = (props) => {

  const {
    text,
    onPress
  } = props

  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}


export default ReuseableButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3C5B47',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    padding: 15,
    borderRadius: 150,
    width: '80%'
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20
  }
})