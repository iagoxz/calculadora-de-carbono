import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './components/WelcomeScreen';
import InfoScreen from './components/InfoScreen';
import UserDataScreen from './components/UserDataScreen';
import Quests from './components/Quests';
import ResultScreen from './components/ResultScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen 
          name="WelcomeScreen" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="InfoScreen" 
          component={InfoScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="UserDataScreen" 
          component={UserDataScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Quests" 
          component={Quests} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ResultScreen" 
          component={ResultScreen} 
          options={{ headerShown: false }} 
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
