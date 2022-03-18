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


  return (
      <View style={styles.body}>

        <View style={styles.view1}>
          <View style={styles.component1}><Text>1</Text></View>
          <View style={styles.component2}><Text>1</Text></View>
          <View style={styles.component3}><Text>1</Text></View>
        </View>

        <View style={styles.view2}>
          <Text style={styles.component4}>4</Text>
        </View>

        <View style={styles.view3}>
          <Text style={styles.component5}>5</Text>
        </View>

        <View style={styles.view4}>
        <View style={styles.component6}><Text>6</Text></View>
        <View style={styles.component7}><Text>7</Text></View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  body:{
    flex:1,
  },
  view1 : { 
    flex:1,
    flexDirection:"row",
  },
  view2 : {
    flex:1,
    flexDirection: "row",
    justifyContent:'center',
  },
  view3 : {
    flex:1,
    flexDirection: "row",
    justifyContent:'center',
  },
  view4 : {
    flex:7,
    flexDirection: "row"
  },
  component1 : {
    flex:1,
    alignItems : 'center',
    justifyContent:'center',
    backgroundColor:'#00d4ff'
  },
  component2 : {
    flex:2,
    alignItems : 'center',
    justifyContent:'center',
    backgroundColor : '#ff00ed'
  },
  component3 : {
    flex:3,
    alignItems : 'center',
    justifyContent:'center',
    backgroundColor:'#fffc00'
  },
  component4 : {
    flex:1,
    textAlign:'center',
    fontSize : 20,
    padding:20,
    backgroundColor : '#ff0000'
  },
  component5 : {
    flex:1,
    textAlign:'center',
    fontSize : 20,
    padding:20,
    backgroundColor : '#00ff19'
  },
  component6 : {
    flex:1,
    alignItems : 'center',
    justifyContent:'center',
    backgroundColor: '#ffffff'
  },
  component7 : {
    flex:1,
    alignItems : 'center',
    justifyContent:'center',
    backgroundColor : '#1400ff'
  },
});

export default App;
