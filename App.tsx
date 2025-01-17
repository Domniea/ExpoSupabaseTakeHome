import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  TextInput,
  Button,
  View,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form'

import { AuthProvider } from './context/AuthProvider/AuthProvider';

//Componants
import Input from './componants/RTextInput';
import RButton from './componants/ReusableButton';
import RInput from './componants/RTextInput';

import LoginScreen from './screens/login';
import AuthStack from './navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const {
    control,
    handleSubmit
  } = useForm()

  const onSubmitPress = () => {
    console.log('TEST')
  }


  return (
    <View style={styles.root}>
      <AuthProvider>
        <NavigationContainer>
          <AuthStack/>
        </NavigationContainer>
      </AuthProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  login: {
    alignItems: 'center',
    width: '100%'
  },
  textContainer: {
    height: '10%',
    width: '90%',
    justifyContent: 'center',
    // alignItems: 'center',
      backgroundColor: 'blue'
  },
  input: {
    color: 'black',
    width: '89%',
    height: '10%',
    borderColor: 'black',
    borderWidth: 2
  },
  
});
