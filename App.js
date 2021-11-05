// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import BeachScreen from './src/screens/BeachScreen';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
         name="BeachScreen"
          component={BeachScreen}
        /> 
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          // options={}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}




