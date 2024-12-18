import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutMe from './screens/aboutMe';
import AppL from './AppL';


const Tab = createBottomTabNavigator(); 
 
function App () { 
  return ( 
    <NavigationContainer> 
      <Tab.Navigator> 
        <Tab.Screen name="О Себе" component={AboutMe} />
        <Tab.Screen name="Мои языки программирования" component={AppL} /> 
      </Tab.Navigator> 
    </NavigationContainer> 
  ); 
}; 
 
export default App;

 