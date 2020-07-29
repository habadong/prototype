import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  useColorScheme,
  Appearance,
  Switch,
} from 'react-native';
import { useTheme, NavigationContainer } from '@react-navigation/native';
import { useDarkMode } from 'react-native-dark-mode';
import { EventRegister } from 'react-native-event-listeners'


export default function Darkmode({navigation}) {
    const [darkmode, setDarkmode] = useState(false);
    const {colors} = useTheme();

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: colors.text}}>Dark mode</Text>
        <Switch
          value={darkmode}
          onValueChange={(value) => {

            setDarkmode(value);
            EventRegister.emit('themeChange', value);

          }}></Switch>
        <TouchableOpacity style={{marginBottom: 8, backgroundColor: colors.card}} onPress={() => navigation.navigate('MainScreen')}>
            <Text>MainScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginBottom: 8, backgroundColor: colors.card}} onPress={() => navigation.navigate('MasonryList_')}>
            <Text>MasonryList</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginBottom: 8, backgroundColor: colors.card}} onPress={() => navigation.navigate('TimelineFlatlist')}>
            <Text>TimelineFlatlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginBottom: 8, backgroundColor: colors.card}} onPress={() => navigation.navigate('TimelineTheme')}>
            <Text>TimelineTheme</Text>
        </TouchableOpacity>
      </View>
    );

}


