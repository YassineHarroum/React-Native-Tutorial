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
   SectionList,
   RefreshControl,
 } from 'react-native';
 
 
 const App = () => {
 
     const [refreshing,setrefreshing] = useState(false);
     
     const [DATA , setDATA ] = useState ([
       {
         title: 'title 1',
         data: ['Item 1-1','Item 1-2'],
       },
       {
         title: 'title 1',
         data: ['Item 1-1','Item 1-2'],
       },
     ])
 
     const onrefresh = ()=>{
       setrefreshing(true);
       setDATA ([...DATA , {
         title: 'title '+ DATA.length.toString(),
         data: ['Item '+DATA.length.toString()+'-1','Item '+DATA.length.toString()+'-2']
       }]);
       setrefreshing(false);
     }
 
   return (
     <SectionList
       style={styles.sectio}
       keyExtractor={(item,index)=> index.toString()}
       sections={DATA}
       renderItem={({item}) => (
         <View>
           <Text style={styles.item}>- {item}</Text>
         </View>
       )}
       renderSectionHeader={({section})=>(
         <View style={styles.body}>
           <Text style={styles.text}>{section.title}</Text>
         </View>
       )}
       refreshControl={
         <RefreshControl
           refreshing={refreshing}
           onRefresh={onrefresh}
         />
       }
     />
   );
 };
 
 const styles = StyleSheet.create({
   sectio : {
    margin : 5,
   },
   body:{
     flex:1,
     flexDirection: 'column',
     backgroundColor : '#ffffff',
     alignItems:'stretch',
     margin : 10,
   },
   item : {
      fontSize:20,
      padding:20,
      color:'#ff00ff',
      textAlign:'center',
   },
   text : {
     fontSize: 40,
     backgroundColor:'#ff2aed',
     textAlign:'center',
     margin:10,
   }
 });
 
 export default App;
 