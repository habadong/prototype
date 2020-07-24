import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TimelineFlatlist from './example/TimelineFlatlist';
import TimelineTheme from './example/TimelineTheme';
import Masonry_ from './example/Masonry_';
import MasonryList_ from './example/MasonryList_';


const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TimelineTheme" component={TimelineTheme} options={{headerShown: false}}/>
        <Stack.Screen name="TimelineFlatlist" component={TimelineFlatlist} options={{headerShown: false}}/>
        <Stack.Screen name="MasonryList_" component={MasonryList_} options={{headerShown: false}}/>
        <Stack.Screen name="Masonry_" component={Masonry_} options={{headerShown: false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>  
  );
}

