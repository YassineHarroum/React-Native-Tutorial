/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, refreshControl } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SectionList,
  RefreshControl,
} from 'react-native';


const App = () => {
  const [name,setname] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Enter your email :</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={(value)=>{setname(value)}}
        placeholder='user email'
      />
      <Text style={styles.text}>Enter your password :</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={(value)=>{setname(value)}}
        placeholder='password'
        keyboardType='numeric'
        secureTextEntry
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    margin: 15,
  },
  text: {
    fontSize: 20,
    margin: 10,
    color: 'black',
    textAlign: 'center',
  },
  textinput: {
    width : 150,
    borderWidth : 1,
    textAlign :'center',
    fontSize : 18,
  }
});

export default App;
