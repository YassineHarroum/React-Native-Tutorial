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
  ImageBackground,
  Modal,
} from 'react-native';


const App = () => {
  const [coordinate, setcoordinate] = useState({ email: '', password: '' });
  const [submitted, setsubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [warningPassword, setWarningPassword] = useState(false);
  const X = '@';
  const onPressHandler = () => {
    if ((coordinate.email.includes(X)) && (coordinate.password.length > 3)) {
      setsubmitted(!submitted);
    } else if (coordinate.password.length <= 3) {
      setShowWarning(!showWarning);
      setWarningPassword(!warningPassword);
    } else {
      setShowWarning(!showWarning);
    }

  };

  return (
    <ImageBackground
      style={styles.body}
      source={require('./img/background.png')}
    >
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() =>
          setShowWarning(false)
        }
        animationType='slide'
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>Warning !</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={{ fontSize: 15, textAlign: 'center' }}>{warningPassword ? 'Your Password is low' : 'Your adrees email is incorrect'}</Text>
            </View>
            <Pressable
              onPress={() => { setShowWarning(!showWarning) }}
              hitSlop={{ top: 25, bottom: 25, right: 25, left: 25 }}
              android_ripple='slide'
              style={styles.press_Warning}
            >
              <Text style={{ fontSize: 20 }}>ok</Text>
            </Pressable>
          </View>
        </View>

      </Modal>
      <Text style={styles.text}>User email :</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={(value) => {
          setcoordinate({ email: value.toString(), password: '' + coordinate.password })
        }}
        placeholder='user email'
      />
      <Text style={styles.text}>
        Password :</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={(value) => setcoordinate({ email: '' + coordinate.email, password: value.toString() })}
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
        <Text style={styles.text}>
          you are sign as : {coordinate.email.slice(0, coordinate.email.indexOf("@"))}
        </Text>
        :
        null
      }
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

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
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  warning_modal: {
    width: 300,
    height: 200,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  warning_title: {
    flex: 1,
    backgroundColor: '#f10185',
    borderWidth: 1,
    borderColor: '#f10185',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    flex: 2,
    height: 100,
    justifyContent: 'center'
  },
  press_Warning: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01b5f1',
    borderWidth: 1,
    borderColor: '#01b5f1',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  }
});

export default App;
