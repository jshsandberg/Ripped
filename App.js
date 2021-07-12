import 'react-native-gesture-handler';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import TestScreen from "./screens/TestScreen";


const Stack = createStackNavigator();

Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize('zkDdlwEQNGG2QRZiZG9c6woJRTREf2AThloq9HcI', '3bHoOigXfw16k0P9od2qk2fJX9m7DOWHs7m1AMpy');
Parse.serverURL = 'https://parseapi.back4app.com/';

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Welcome' }}
        />
         <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Test"
          component={TestScreen}
          options={{ title: 'Test' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}







