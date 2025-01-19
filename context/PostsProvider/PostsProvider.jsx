import { Alert, StyleSheet, Text, View, AppState } from 'react-native'
import React, { useState, createContext, useContext, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { SupabaseClient } from '@supabase/supabase-js'
// import { Button, Input } from '@rneui/themed'

import { AuthContext } from '../AuthProvider/AuthProvider'




const PostsContext = createContext()

const PostsProvider = (props) => {

    const [allUsersPosts, setAllUsersPosts] = useState([])
    const [singleUsersPosts, setSingleUsersPosts] = useState([])

    const {
        user,
        emailAddress
    } = useContext(AuthContext)

    async function getSingleUsersPosts () {
        if(emailAddress){
            const { data, error } = await supabase
            .from('posts')
            .select('user_post')
            .eq('email', `${emailAddress}`)
            .then((res) => {
                setSingleUsersPosts(res.data)
            })
        }
    }
    

    async function getAllUsersPosts() {
        const { data, error } = await supabase
        .from('posts')
        .select('*')
    
        setAllUsersPosts(data)
    }

    async function subscribe() {
        const subscription = await supabase
        .from('posts')
        .on('*', (payload) => {
            console.log('butts', payload)
            setAllUsersPosts([...allUsersPosts, payload.new])
        })
        .subscribe()
    }

useEffect(() => {
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

}, [allUsersPosts])

useEffect(() => {
    const channel2 = supabase
    .channel('chanel2')
    .on(
        'postgres_changes',
        {
            event: '*',
            // schema: 'public',
            table: 'posts',
        },
           (payload) => {
            return setSingleUsersPosts([...singleUsersPosts, payload.new])
           }
    )
    .subscribe()

    return () => supabase.removeChannel(channel2)

}, [singleUsersPosts])
       
        
    useEffect(() => {
        getAllUsersPosts()
        getSingleUsersPosts()
        subscribe()
    }, [user])

    
  return (
    <PostsContext.Provider
        value={{
         allUsersPosts,
         setAllUsersPosts,
         singleUsersPosts,
         setSingleUsersPosts
        }}
    >
        {props.children}
    </PostsContext.Provider>
  )
}

export { PostsContext, PostsProvider }

const styles = StyleSheet.create({})