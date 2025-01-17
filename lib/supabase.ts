import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl ='https://vyplhuvfnepcrckvktfc.supabase.co';
const supabaseAnonKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5cGxodXZmbmVwY3Jja3ZrdGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4OTQ5NjAsImV4cCI6MjA1MjQ3MDk2MH0.-_kHBHlwfy087t3UVt7h7Caw3qfyyiGdhQFly5BiP5A';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


