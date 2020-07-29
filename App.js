import React, {useState, useEffect} from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EventRegister } from 'react-native-event-listeners'

import TimelineFlatlist from './example/TimelineFlatlist';
import TimelineTheme from './example/TimelineTheme';
import Masonry_ from './example/Masonry_';
import MasonryList_ from './example/MasonryList_';
import Darkmode from './example/Darkmode';
import MainScreen from './example/MainScreen';

const Stack = createStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#222222',
    card: 'rgb(255, 255, 255)',
    text: '#F0F0F0',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {

  const [darkApp, setDarkApp] = useState(false);
  const appTheme = darkApp ? MyTheme : DefaultTheme;

  useEffect(() => {
    let listener = EventRegister.addEventListener('themeChange', (data) => {
      setDarkApp(data);
    });

    return () => {
      EventRegister.removeEventListener(listener);
    };
  }, []);

  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Darkmode" component={Darkmode} options={{headerShown: false}}/>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown: false}}/>
        <Stack.Screen name="TimelineFlatlist" component={TimelineFlatlist} options={{headerShown: false}}/>
        <Stack.Screen name="TimelineTheme" component={TimelineTheme} options={{headerShown: false}}/>
        <Stack.Screen name="MasonryList_" component={MasonryList_} options={{headerShown: false}}/>
        <Stack.Screen name="Masonry_" component={Masonry_} options={{headerShown: false}}/>  
      </Stack.Navigator>
    </NavigationContainer>  
  );
}

