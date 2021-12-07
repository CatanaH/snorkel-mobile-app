// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import BeachScreen from './src/screens/BeachScreen';
import ReviewSpot from './src/screens/ReviewSpot';
import AllReviews from './src/screens/AllReviews';
import TideSurfDetails from './src/screens/TideSurfDetails';

const Stack = createNativeStackNavigator();

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
        />
        <Stack.Screen
          name="ReviewSpot"
          component={ReviewSpot}
        />
        <Stack.Screen
          name="AllReviews"
          component={AllReviews}
        />
        <Stack.Screen
          name="TideSurfDetails"
          component={TideSurfDetails}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}




