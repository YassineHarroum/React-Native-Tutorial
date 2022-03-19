/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState , refreshControl} from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';




const App = () => {
  const [Items , setItems] = useState([
    {key : 1 , Item:1},
    {key : 2 , Item:2},
    {key : 3 , Item:3},
    {key : 4 , Item:4},
    {key : 5 , Item:5},
    {key : 6 , Item:6},
    {key : 7 , Item:7},
    {key : 8 , Item:8},
    {key : 9 , Item:9},
    {key : 10 , Item:10},
  ]
  )

  const [Refreshing , setRefreshing] = useState (false)

  const onrefresh = () => {
    setRefreshing(true);
    setItems([...Items , {key : Items[Items.length-1].key + 1 , Item : Items[Items.length-1].Item +1 }]);
    setRefreshing(false);
  }

  return (
    <ScrollView 
      tyle={styles.body}
      refreshControl={
        <RefreshControl 
        refreshing={Refreshing}
        onRefresh={onrefresh}
        colors={['#ff00ff']}
        />
      }
      >
          {
            Items.map((e)=>{
              return(
                <View key={e.key}>
                    <Text style={styles.text}>{e.Item}</Text>
                </View>
              )
            })
          }  
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  body:{
    flex:1,
    flexDirection: 'column',
    backgroundColor : '#ffffff',
    alignItems:'stretch',
  },
  text : {
    fontSize: 40,
    backgroundColor:'#ff2aed',
    textAlign:'center',
    margin:10,
  }
});

export default App;
