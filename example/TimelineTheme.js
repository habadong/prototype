import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
// import Timeline from '../lib/index';
import Timeline from 'react-native-timeline-theme';
import LinearGradient from 'react-native-linear-gradient';

const data = [
    {
      title: 'Wake up',
      description: 'Remember tooth brushing and read notes on the tablet',
      time: new Date("March 6, 2018 6:15:00"),
      renderDetail: () => <View style={styles.cardContainer}><Image style={styles.card} source={{uri:'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg'}}/></View>
    },
    {
      title: 'Eatting',
      description: 'Eat breakfast: bread and drink milk',
      time: new Date("March 6, 2018 7:00:00"),
      renderDetail: () => <View style={styles.cardContainer}><Image style={styles.card} source={{uri:'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg'}}/></View>
    },
    {
      title: 'Working',
      description: 'Go to ABX Company and working react-native',
      time: new Date("March 6, 2018 7:35:00"),
      renderDetail: () => <View style={styles.cardContainer}><Image style={styles.card} source={{uri:'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg'}}/></View>
    },
    {
      title: 'Relax',
      description: 'Listen to music "Hello Vietnam" song',
      time: new Date("March 6, 2018 14:15:00"),
      renderDetail: () => <View style={styles.cardContainer}><Image style={styles.card} source={{uri:'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg'}}/></View>
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
    cardContainer: {
      width: 80,
      height: 120,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: {
        width: 4,
        height: 8,
      },
      shadowOpacity: 0.48,
      shadowRadius: 11,
      elevation: 25,
    },
    card: {
      flex: 1,
      borderRadius: 8,
    }
  });
  