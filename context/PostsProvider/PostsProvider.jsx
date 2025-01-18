import { Alert, StyleSheet, Text, View, AppState } from 'react-native'
import React, { useState, createContext, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
// import { Button, Input } from '@rneui/themed'




const PostsContext = createContext()

const PostsProvider = (props) => {

    const [allUsersPosts, setAllUsersPosts] = useState([])
    const [singleUsersPosts, setSingleUsersPosts] = useState([])

    async function getSingleUsersPosts () {
            const { data, error } = await supabase
            .from('posts')
            .select('*')
            
            setAllUsersPosts(data)
    }
      
    async function getAllUsersPosts() {
        const { data, error } = await supabase
        .from('posts')
        .select('*')
    
        setSingleUsersPosts(data)
    }

    useEffect(() => {
        getAllUsersPosts()
    }, [])

  return (
    <PostsContext.Provider
        value={{
         allUsersPosts
        }}
    >
        {props.children}
    </PostsContext.Provider>
  )
}

export { PostsContext, PostsProvider }

const styles = StyleSheet.create({})