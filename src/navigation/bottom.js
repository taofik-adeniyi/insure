import React from 'react';
import { View, Text, Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Insure from '../screens/Insure'
import AddInventory from '../screens/AddInventory';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';


const Tab = createBottomTabNavigator();


function Home() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Ionicons name="ios-camera-reverse" size={30} color={'white'} />
      </View>
    );
  }
  function Menu() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Menu!</Text>
      </View>
    );
  }
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  function Study() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Study!</Text>
      </View>
    );
  }
const BottomTabs = () => {
    return (
        <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            color: 'red'
          },
          tabBarLabelStyle: {
              color: 'black'
          }
        }}>
        <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: ({focused}) => (
                    <Entypo name="home" size={focused ? 30: 25} color={focused ? 'blue' : 'grey'} />
                )
            }}
        />
        <Tab.Screen 
            name="Inventory" 
            component={Study}
            options={{
                tabBarIcon: ({focused, color, size}) => (
                    <Ionicons name="umbrella" size={focused ? 30: 25} color={focused ? 'blue' : 'grey'} />
                )
            }}
        />
        
            <Tab.Screen 
              name="Insure" 
              component={Insure}
              options={{
                tabBarIcon: ({focused, color, size}) => (
                  <MaterialIcons name="inventory" size={focused ? 30: 25} color={focused ? 'blue' : 'grey'} />
                )
              }}
              />
        <Tab.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{
                tabBarIcon: ({focused, color, size}) => (
                    <Ionicons name="search-sharp" size={focused ? 30: 25} color={focused ? 'blue' : 'grey'} />
                )
            }}
        />
        <Tab.Screen 
            name="Menu" 
            component={Menu} 
            options={{
                tabBarIcon: ({focused, color, size}) => (
                    <Ionicons name="md-menu-sharp" size={focused ? 30: 25} color={focused ? 'blue' : 'grey'} />
                )
            }}
        />
        </Tab.Navigator>
    )
}

export default BottomTabs