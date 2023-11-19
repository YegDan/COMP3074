import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from '../../screens/HomeScreen.js'
import FavoritesScreen from '../../screens/FavoritesScreen.js'
 
const Tab = createBottomTabNavigator();

function AppNavigator() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigator;