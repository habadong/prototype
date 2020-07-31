import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Timeline from 'react-native-timeline-theme';
import LinearGradient from 'react-native-linear-gradient';

const data = [
    {
      title: '2020년 10월 12일',
      description: 'Eat breakfast: bread and drink milk',
      
      renderDetail: ({title, time}) => <View style={styles.cardContainer}><Text style={styles.timeText}>{title}</Text><Image style={styles.card} source={{uri:'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg'}}/></View>
    },
    {
      title: '2020년 10월 24일',
      description: 'Go to ABX Company and working react-native',
      time: '11:00',
      renderDetail: ({title, time}) => <View style={styles.cardContainer}><Text style={styles.timeText}>{title}</Text><Image style={styles.card} source={{uri:'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg'}}/></View>
    },
    {
      title: '2020년 11월 11일',
      description: 'Listen to music "Hello Vietnam" song',
      time: '14:00',
      renderDetail: ({title, time}) => <View style={styles.cardContainer}><Text style={styles.timeText}>{title}</Text><Image style={styles.card} source={{uri:'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg'}}/></View>
    },
    {
      title: '2020년 12월 12일',
      time: '21:00',
      renderDetail: ({title, time}) => <View style={styles.cardContainer}><Text style={styles.timeText}>{title}</Text><Image style={styles.card} source={{uri:'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg'}}/></View>
    }
];

const dataDUMMY = [
  {
    uri: 'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg',
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg',
  },
];

const renderCard = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.card} source={item} />
    </View>
  );
};

const renderList = () => {
  return <FlatList data={dataDUMMY} renderItem={renderCard} />;
};

export default function TimelineTheme() {

  const {colors} = useTheme();

  const renderTime = (rowData, sectionID, rowID) => {
    return (
      // <LinearGradient
      //   style={styles.timeContainer}
      //   start={{x: 0, y: 0}}
      //   end={{x: 1, y: 0}}
      //   colors={['#7F00FF', '#E100FF']}>
      <View style={styles.timeContainer}>
          <Text style={{color: colors.text}}>{rowData.time}</Text>
      </View>
      // </LinearGradient>
    );
  }

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <Timeline
        data={data}
        columnFormat={'single-column-left'}
        // renderTime={renderTime}
      />
    </View>
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
      flexDirection: 'column',
      width: 150,
      height: 200,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: {
        width: 4,
        height: 8,
      },
      shadowOpacity: 0.48,
      shadowRadius: 11,
      // elevation: 25,
      marginBottom: 70,
    },
    card: {
      flex: 1,
      borderRadius: 8,
    },
    timeContainer: {
      width: 70,
      height: 30,
      borderRadius: 18,
      justifyContent: 'center',
      alignItems: 'center'
    },
    timeText: {
      fontSize: 14,
      marginBottom: 8
    },
  });
  