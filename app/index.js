
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationIndependentTree } from '@react-navigation/native';
import HomeScreen from './HomeScreen';  // Adjust this path if needed
import AboutScreen from './AboutScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}