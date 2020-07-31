import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import Modal from 'react-native-modal';

const { height, width } = Dimensions.get("window");
const DUMMY = [
  {
    time: '10:45',
    title: 'Play Badminton',
    description:
      'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
  },
  {time: '12:00', title: 'Lunch'},
  {
    time: '14:00',
    title: 'Watch Soccer',
    description:
      'Team sport played between two teams of eleven players with a spherical ball. ',
  },
  {
    time: <Image source={{uri:'https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/3rWZ/image/fiYqC-m8arDti2dUPSrfAZ8wBSw.jpg' }}/>,
    title: 'Go to Fitness center',
    description: 'Look out for the Best Gym & Fitness Centers around me :)',
  },
];

const DUMMY2 = [
  {
    time: '2020년 10월 28일',
    title: 'Archery Training',
    // description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
    imageUrl: 'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg',
  },
  {
    time: '2020년 11월 2일',
    title: 'Play Badminton',
    // description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
    imageUrl: 'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg',
  },
  {
    time: '2020년 11월 28일',
    title: 'Watch Soccer',
    // description: 'Team sport played between two teams of eleven players with a spherical ball. ',
    imageUrl: 'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg',
  },
  {
    time: '2020년 12월 28일',
    title: 'Go to Fitness center',
    // description: 'Look out for the Best Gym & Fitness Centers around me :)',
    imageUrl: 'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg',
  }
];

export default function TimelineFlatlist() {

  const carouselRef = useRef('');
  const items = DUMMY2.reverse();

  const renderItem = ({item}, parallaxProps) => {
    
    return (
      <View style={{flex: 1, height: 350, width: 220}}>
        <ImageBackground 
          source={{uri: item.imageUrl}}
          style={styles.imageCard}
          imageStyle={{borderRadius: 8}}
          {...parallaxProps}>
          
        </ImageBackground>
      </View>
    );

  }

  const renderDetail = (rowData, sectionID, rowID) => {
    return (
      <View>
        {/* <Text style={styles.title}>{rowData.title}</Text> */}
        <LinearGradient
          style={styles.timeContainer}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#7F00FF', '#E100FF']}>
        
            <Text style={styles.timeText}>{rowData.time}</Text>
        
        </LinearGradient>
        <View style={styles.cardContainer}>
          <Carousel
              ref={carouselRef}
              firstItem={items.length - 1}
              // containerCustomStyle={{
              //   transform: [{ scaleX: -1 }]
              // }}
              data={DUMMY2}
              renderItem={renderItem}
              sliderWidth={300}
              sliderHeight={500}
              itemWidth={200}
              layout={'stack'} 
              layoutCardOffset={10}
            />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Timeline
        style={styles.list}
        data={DUMMY2}
        circleSize={10}
        circleColor="#E100FF"
        lineColor="gray"
        titleStyle={{marginTop: -20 }}
        descriptionStyle={{color: 'gray'}}
        renderDetail={renderDetail}
        showTime={false}
        separator={true}
        columnFormat='single-column-left'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  timeContainer: {
    width: width / 2.53,
    height: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  timeText: {
    fontSize: 11,
    color: 'white'
  },
  cardContainer: {

  },
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
  title: {
    fontSize: 16,
    color: '#8C00C4'
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 50,
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray',
  },
  imageCard: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'space-between',
  },
});
