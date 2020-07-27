import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';
// import Timeline from '../lib/index';
import Timeline from 'react-native-timeline-theme';
import LinearGradient from 'react-native-linear-gradient';

const data = [
    {
      title: 'Wake up',
      description: 'Remember tooth brushing and read notes on the tablet',
      time: '09:00',
      renderDetail: () => <View style={styles.cardContainer}><Image style={styles.card} source={{uri:'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg'}}/></View>
    },
    {
      title: 'Eatting',
      description: 'Eat breakfast: bread and drink milk',
      time: '10:00',
      renderDetail: () => <View style={styles.cardContainer}><Image style={styles.card} source={{uri:'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg'}}/></View>
    },
    {
      title: 'Working',
      description: 'Go to ABX Company and working react-native',
      time: '11:00',
      renderDetail: () => <View style={styles.cardContainer}><Image style={styles.card} source={{uri:'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg'}}/></View>
    },
    {
      title: 'Relax',
      description: 'Listen to music "Hello Vietnam" song',
      time: '14:00',
      renderDetail: () => <View style={styles.cardContainer}><Image style={styles.card} source={{uri:'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg'}}/></View>
    },
    {
      time: '21:00',
      renderDetail: () => <View style={styles.cardContainer}><Image style={styles.card} source={{uri:'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg'}}/></View>
    }
];

const dataDUMMY = [
  {
    uri: 'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg',
    uri: 'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg',
    uri: 'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg',
  }
];

const renderCard = ({item}) => {

  return(
    <View style={styles.cardContainer}><Image style={styles.card} source={{uri: item}}/></View>
  );

};

const renderList = () => {
  return(
    <FlatList
      data={dataDUMMY}
      renderItem={renderCard}/>
  )
};

export default function TimelineTheme() {

  const renderTime = (rowData, sectionID, rowID) => {
    return (
      <LinearGradient
        style={styles.timeContainer}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#7F00FF', '#E100FF']}>
          <Text style={styles.timeText}>{rowData.time}</Text>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#ECE9E6', '#ffffff']}>
      <Timeline
        data={data}
        isRenderSeperator
        columnFormat={'two-column'}
        renderTime={renderTime}
      />
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
      flexDirection: 'column',
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
    },
    timeContainer: {
      width: 70,
      height: 30,
      borderRadius: 18,
      justifyContent: 'center',
      alignItems: 'center'
    },
    timeText: {
      color: 'white'
    },
  });
  