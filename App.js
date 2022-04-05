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

import ModalComponent from './Components/ModalComponent'

const App = () => {

  const [coordinate, setcoordinate] = useState({ email: '', password: '' });

  const [submitted, setsubmitted] = useState(false);

  const [showWarning, setShowWarning] = useState(false);


  const conditionEmail = {
    CondLenghtEmail: coordinate.email.length > 6,
    CondUsername: coordinate.email.slice(0, coordinate.email.indexOf('@')).length >= 1,
    CondMailBoite: coordinate.email.slice(coordinate.email.indexOf('@') + 1, coordinate.email.indexOf('.')).length >= 2,
    CondDest: coordinate.email.slice(coordinate.email.indexOf('.') + 1, (coordinate.email.length)).length >= 2,
    CondEmailAtt: coordinate.email.includes('@'),
    CondEmailPoint: coordinate.email.slice(coordinate.email.indexOf('@'), coordinate.email.length - 1).includes("."),
  };

  const onPressHandler = () => {
    if ((conditionEmail.CondEmailAtt) && (coordinate.password.length > 3) && (conditionEmail.CondEmailPoint) &&
      (conditionEmail.CondLenghtEmail) && (conditionEmail.CondUsername) && (conditionEmail.CondMailBoite) &&
      (conditionEmail.CondDest)) {
      setsubmitted(!submitted);
    } else {
      setShowWarning(!showWarning);
    }
  }

  return (
    <ImageBackground
      style={styles.body}
      blurRadius={1}
      // source={require('./img/background.png')}
      source={{ uri: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm373batch10-0001d-168.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=7277213dcbde79734555c84d62d94621' }}
    >

      <ModalComponent
        visibility={showWarning}
        functionClose={() =>
          setShowWarning(false)}
        functionBoite={conditionEmail.CondMailBoite}
        functionUserName={conditionEmail.CondUsername}
        functionDest={conditionEmail.CondDest}
        functionPassword={coordinate.password}

        functionPress={() => { setShowWarning(!showWarning) }}
      />
      <View style={styles.containerSign}>


        <Text style={styles.title}>User email :</Text>

        <TextInput
          style={styles.textinput}
          onChangeText={(value) => {
            setcoordinate({ email: value.toString(), password: coordinate.password })
          }}
          placeholder='  User email'
        />

        <Text style={styles.title}>
          Password :
        </Text>

        <TextInput
          style={styles.textinput}
          onChangeText={(value) => {
            setcoordinate({ email: coordinate.email, password: value.toString() })
          }}
          placeholder='  Password'
          keyboardType='numeric'
          secureTextEntry
        />


        <View style={styles.ViewButton}>
            <Pressable
              onPress={onPressHandler}
              hitSlop={{ top: 25, bottom: 25, right: 25, left: 25 }}
              style={() => [
                { backgroundColor: submitted ? '#b48b8b' : '#def4e4' },
                { borderColor: submitted ? '#b48b8b' : '##def4e4' },

                styles.button
              ]}
            >
              <Text style={styles.text}>
                {submitted ? 'clear' : 'Sign in'}
              </Text>
            </Pressable>
        </View>
        {submitted ?
          <Text style={styles.text}>
            you are sign as : {coordinate.email.slice(0, coordinate.email.indexOf("@"))}
          </Text>
          :
          null
        }
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    width: '72%',
    margin: 10,
    paddingTop: 10,
  },
  text: {
    fontSize: 20,
    margin: 10,
    color: 'black',
    textAlign: 'center',
  },
  textinput: {
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f4f4bd",
    // borderColor: "#3e6787",
    // borderColor: "#b48b8b",
    // borderColor: "#f4d4bd",
    // borderColor: "#def4e4",
    fontSize: 18,
    paddingLeft: 15,
  },
  button: {
    width: 100,
    margin: 20,

    borderRadius: 15,
  },
  containerSign :{
    height:350,
    padding:20,
    borderRadius:20,
    backgroundColor: '#ffffff',
    opacity:0.95,
  },
  ViewButton:{
    justifyContent:'center',
    alignItems:'center',
  }

});

export default App;
