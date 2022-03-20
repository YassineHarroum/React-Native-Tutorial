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
  Pressable,
} from 'react-native';


const App = () => {
  const [name, setname] = useState('');
  const [submitted, setsubmitted] = useState(false);
  const onPressHandler = () => {
    setsubmitted(!submitted);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>User email :</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={(value) => { setname(value) }}
        placeholder='user email'
      />
      <Text style={styles.text}>Password :</Text>
      <TextInput
        style={styles.textinput}
        placeholder='password'
        keyboardType='numeric'
        secureTextEntry
      />
      <Pressable
        onPress={onPressHandler}
        hitSlop={{ top: 25, bottom: 25, right: 25, left: 25 }}
        style={() => [
          { backgroundColor: submitted ? '#b101f1' : '#01bff1' },
          { borderColor: submitted ? '#b101f1' : '#01bff1' },

          styles.button
        ]}
      >
        <Text style={styles.text}>
          {submitted ? 'clear' : 'Sign up'}
        </Text>
      </Pressable>
      {submitted ?
        <Text style={styles.text}>you are sign as : {name}</Text>
        :
        null
      }
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
    width: 250,
    borderWidth: 1,
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    // backgroundColor: '#01bff1',
    width: 100,
    margin: 20,
    borderWidth: 1,
    // borderColor: '#01bff1',
    borderRadius: 15,

  }
});

export default App;
