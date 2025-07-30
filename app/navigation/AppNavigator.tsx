import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Detail from '../screens/DetailScreen';
import Favorite from '../screens/Favorite';
import Home from '../screens/HomeScreen';
import Search from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Favorite" component={Favorite} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;