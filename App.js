/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';




const App = () => {
  const [number , setnumber] = useState({num1:0 , num2:0})

  const onHandlingClickAdd = () => {
    setnumber({num1:number.num1+1 , num2: number.num2+5})
  };
  const onHandlingClickReset = () => {
    setnumber({num1:0 , num2:0})
  };

  return (
    <View style={styles.body}>
      <Text style={styles.Text}>first add {number.num1}</Text>
      <Button title='Add' style={styles.butt} onPress={onHandlingClickAdd}></Button>
      <Button title='reset' style={styles.butt} onPress={onHandlingClickReset}></Button>
      <Text style={styles.Text}>Second add {number.num2} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body:{
    flex: 1,
    backgroundColor:'#ffffff',
    alignItems : 'center',
    justifyContent:'center',
  },
  butt : {
    padding:'20px',
  },
  Text : {
    color:'#ff00ff',
    fontSize : 20,
    fontStyle:'italic',
    margin:10,
  },
});

export default App;
