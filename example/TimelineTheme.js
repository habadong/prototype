import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
// import Timeline from '../lib/index';
import Timeline from 'react-native-timeline-theme';
import LinearGradient from 'react-native-linear-gradient';

const data = [
    {
      title: 'Wake up',
      description: 'Remember tooth brushing and read notes on the tablet',
      time: new Date("March 6, 2018 6:15:00"),
    },
    {
      title: 'Eatting',
      description: 'Eat breakfast: bread and drink milk',
      time: new Date("March 6, 2018 7:00:00"),
    },
    {
      title: 'Working',
      description: 'Go to ABX Company and working react-native',
      time: new Date("March 6, 2018 7:35:00"),
    },
    {
      title: 'Relax',
      description: 'Listen to music "Hello Vietnam" song',
      time: new Date("March 6, 2018 14:15:00"),
    },
];

export default function TimelineTheme() {

    
  return (
    <LinearGradient
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#70e1f5', '#ffd194']}>
      <Timeline data={data} isRenderSeperator columnFormat={'two-column'} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 65,
      backgroundColor: 'white',
    },
    list: {
      flex: 1,
      marginTop: 20,
    },
  });
  