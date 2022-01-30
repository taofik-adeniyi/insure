/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   StatusBar,
   StyleSheet,
   View, Text
 } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
 import MyNavigation from './src/navigation';
 
 
 const App = () => {
 
   return (
     <>
       <StatusBar barStyle={'dark-content'} />
       <MyNavigation />
       {/* <View>
         <Text>Hello</Text>
         <Text>Hello</Text>
         <Text>Hello</Text>
         <Text>Hello</Text>
       <Ionicons name="ios-camera-reverse" size={30} color={'red'} />
       </View> */}
     </>
   );
 };
 
 
 export default App;
 