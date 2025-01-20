// import { AppState } from 'react-native'
// import 'react-native-url-polyfill/auto';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { createClient } from '@supabase/supabase-js';



// const supabaseUrl ='https://vyplhuvfnepcrckvktfc.supabase.co';
// const supabaseAnonKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5cGxodXZmbmVwY3Jja3ZrdGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4OTQ5NjAsImV4cCI6MjA1MjQ3MDk2MH0.-_kHBHlwfy087t3UVt7h7Caw3qfyyiGdhQFly5BiP5A';

// export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
//     auth: {
//         storage: AsyncStorage,
//         autoRefreshToken: true,
//         persistSession: true,
//         detectSessionInUrl: false,
//     }
// });

// AppState.addEventListener('change', (state) => {
//     if (state === 'active') {
//       supabase.auth.startAutoRefresh()
//     } else {
//       supabase.auth.stopAutoRefresh()
//     }
//   })

import { AppState } from 'react-native'
import * as SecureStore from 'expo-secure-store';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl ='https://vyplhuvfnepcrckvktfc.supabase.co';
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5cGxodXZmbmVwY3Jja3ZrdGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4OTQ5NjAsImV4cCI6MjA1MjQ3MDk2MH0.-_kHBHlwfy087t3UVt7h7Caw3qfyyiGdhQFly5BiP5A';

const SecureStoreAdapter = {
    getItem: (key) => SecureStore.getItemAsync(key),
    setItem: (key, value) => SecureStore.setItemAsync(key, value),
    removeItem: (key) => SecureStore.deleteItemAsync(key),
  };
  
  export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      storage: SecureStoreAdapter,
    },
  });

  AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh()
    } else {
      supabase.auth.stopAutoRefresh()
    }
  })