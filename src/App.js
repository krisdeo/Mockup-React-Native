import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {Image} from 'react-native';

import mkpnew from './assets/mkpnew.png';

import axios from 'axios';

const forgot = () => {
  alert('Forgot Password');
};

export default App = ({navigation}) => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  validateField = () => {
    if (usernameInput == '') {
      alert('Please Insert username');
      return false;
    } else if (passwordInput == '') {
      alert('Please Insert Password');
      return false;
    }

    return true;
  };

  const apiCall = async () => {
    console.log('Call API');
    if (this.validateField()) {
      axios
        .post('https://reqres.in/api/login', {
          email: usernameInput,
          password: passwordInput,
        })
        .then(response => {
          console.log('response data : ');
          console.log(response.data);

          if (response.status == 200) {
            // console.log('BERHASIL >>>', usernameInput, passwordInput, response);
            // console.log('Masuk if status 200');
            navigation.navigate('HomePage');
          } else {
            console.log(
              'Peringatan >>>',
              usernameInput,
              passwordInput,
              response,
            );
            // Alert.alert('Username/Password Salah ', response.data.error.msg);
            Alert.alert('Username/Password Salah ', response.data.error.msg);
          }
        })
        .catch(error => {
          console.log('ERROR CATCH >>>', error.message);
          Alert.alert('Username/Password Salah ', error.message);
        });
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require('./assets/mkpnew.png')} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.logo}>Login</Text>
        {/* <Text style={{color:'red'}}>username shouldn't be empty</Text> */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="username"
            placeholderTextColor="#003f5c"
            onChangeText={value => setUsernameInput(value)}
          />
        </View>
        {/* <Text style={{color:'red'}}>password shouldn't be empty</Text> */}
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={value => setPasswordInput(value)}
          />
        </View>
        <Text style={{color: 'blue'}} onPress={forgot}>
          Forgot Password?
        </Text>

        {/* <TouchableOpacity style={styles.loginBtn} onPress={()=>this.apiCall()}> */}
        <TouchableOpacity style={styles.loginBtn} onPress={() => apiCall()}>
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>

        {/* <Text>{"username ===> " +this.state.usernameInput}</Text>
            <Text>{"password ===> " +this.state.passwordInput}</Text> */}

        <View style={styles.powered}>
          <Text>Powered By MKP Mobile</Text>
          <Text>Version 1.0.0.0.1</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#0e34b0',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  powered: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  poweredText: {
    flex: 3,
  },
  image: {
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#0e34b0',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#3341ff',
    marginRight: 250,
    marginBottom: 10,
  },
  inputView: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'grey',
    borderRadius: 10,
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});
