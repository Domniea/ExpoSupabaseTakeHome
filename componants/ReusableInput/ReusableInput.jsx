import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useForm, Controller, useController } from 'react-hook-form'

const ReusableInput = (props) => {

  const {
    name,
    control, 
    rules,
    placeholder,
    register
  } = props
  
  // const { value, onChange } = field

  return (
    // <Controller
    //   control={control}
    //   name={name}
    //   rules={{ required: 'Email is required' }}
    //   render={({field: {value, onChange}}) => (
    //     <>
    //       <View style={styles.container}>
    //         <TextInput
    //         value={value}
    //         onChange={onChange}
    //         placeholder={placeholder}
    //         style={styles.input}
    //         />
    //       </View>
    //     </>
    //   )}
    // >
    // </Controller>
     <Controller 
              control={control}
              name={name}
              render={({field: {value, onChange, onBlur},  fieldState: {error}}) => (
                <>
                  <View style={[styles.container, {borderColor: error ? 'red': '#e8e8e8', flexDirection: 'row', alignItems: 'center' ,justifyContent: 'space-between'}]}>
                    <TextInput  
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder={name}
                    style={styles.input}
                    autoCapitalize='none'
                    />
                  </View>
                  {
                     error && (
                     <Text style={styles.error}>{error.message}</Text>
                     )
                  }
                </>
              )}
            />  
  )
}


const styles = StyleSheet.create({
  container: {
      borderColor: '#e8e8e8',
      borderWidth: 1,
      backgroundColor: 'white',
      borderRadius: 5,
      width: '100%',
      paddingHorizontal: 10, 
      marginVertical: 5,
  },
input: {
  padding: 15,
  width:'80%'
},
error: {
  color: 'red',
  alignSelf: 'stretch'
}
})

export default ReusableInput