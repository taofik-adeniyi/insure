import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View } from 'react-native'
import BottomTabs from './bottom'
import AddInventory from '../screens/AddInventory';
import Camera from '../screens/Camera';


const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}
const MyNavigation = () => {
  return (
    <NavigationContainer 
    initialRouteName="Root"
    >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Root" component={BottomTabs} />
        <Stack.Screen name="AddInventory" component={AddInventory} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyNavigation;
