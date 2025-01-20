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
                .select('*')
                .eq('email', `${emailAddress}`)
                .then((res) => {
                    setSingleUsersPosts(res.data)
                })
            if(error) {
                console.error('Error: ', error )
            }
            }
    }
    

    async function getAllUsersPosts() {
        const { data, error } = await supabase
            .from('posts')
            .select('*')

        if(error) {
            console.error('Error: ', error )
        }
    
        setAllUsersPosts(data)
    }

    async function deleteUserPost (id) {
        const response = await supabase
            .from('posts')
            .delete()
            .eq('id', id)
            .select()
            // .then((res => {
            //     console.log(res)
            // }))
            console.log('DELETED')
    console.log('response', response)
    }


    // async function subscribe() {
    //     const subscription = await supabase
    //     .from('posts')
    //     .on('*', (payload) => {
    //         console.log('butts', payload)
    //         setAllUsersPosts([...allUsersPosts, payload.new])
    //     })
    //     .subscribe()
    // }

///THIS ONE
// useEffect(() => {
//     getAllUsersPosts()

//     const channel1 = supabase
//         .channel('chanel1')
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

//     return () => supabase.removeChannel(channel1)

// }, [])


//THIS ONE
// useEffect(() => {
//     getSingleUsersPosts()

//     const channel2 = supabase
//     .channel('chanel2')
//     .on(
//         'postgres_changes',
//         {
//             event: '*',
//             // schema: 'public',
//             table: 'posts',
//         },
//            (payload) => {
//             return setSingleUsersPosts([...singleUsersPosts, payload.new])
//            }
//     )
//     .subscribe()

//     return () => supabase.removeChannel(channel2)

// }, [])
       
  //THIS ONE      
    // useEffect(() => {
    //     getAllUsersPosts()
    //     getSingleUsersPosts()
    //     // subscribe()
    // }, [user])

    
  return (
    <PostsContext.Provider
        value={{
            getAllUsersPosts,
            allUsersPosts,
            setAllUsersPosts,
            getSingleUsersPosts,
            singleUsersPosts,
            setSingleUsersPosts,
            deleteUserPost
        }}
    >
        {props.children}
    </PostsContext.Provider>
  )
}

export { PostsContext, PostsProvider }

const styles = StyleSheet.create({})