import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import LinearGradient from 'react-native-linear-gradient';

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
    time: '09:00 AM',
    title: 'Archery Training',
    // description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
    imageUrl: 'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg',
  },
  {
    time: '10:45 AM',
    title: 'Play Badminton',
    // description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
    imageUrl: 'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg',
  },
  {
    time: '02:00 PM',
    title: 'Watch Soccer',
    // description: 'Team sport played between two teams of eleven players with a spherical ball. ',
    imageUrl: 'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg',
  },
  {
    time: '04:30 PM',
    title: 'Go to Fitness center',
    // description: 'Look out for the Best Gym & Fitness Centers around me :)',
    imageUrl: 'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg',
  }
];

export default function TimelineFlatlist() {


  const renderTime = (rowData, sectionID, rowID) => {
    
    return (
      <View>
        <LinearGradient
          style={styles.timeContainer}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#7F00FF', '#E100FF']}>
            <Text style={styles.timeText}>{rowData.time}</Text>
        </LinearGradient>
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
          <Image source={{uri: rowData.imageUrl}} style={{flex: 1, borderRadius: 8}}/>
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
        timeContainerStyle={{minWidth:72}}
        timeStyle={{
          textAlign: 'center',
          backgroundColor: 'white',
          color: 'white',
          padding: 5,
          borderRadius: 13,
        }}
        // descriptionStyle={{color: 'gray'}}
        // options={{
        //   style: {paddingTop: 5},
        // }}
        // innerCircle={'dot'}
        renderDetail={renderDetail}
        // renderTime={renderTime}
        // separator={true}
        // showTime={false}
        columnFormat='two-column'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 20,
  //   paddingTop: 65,
  //   backgroundColor: 'white',
  // },
  // list: {
  //   flex: 1,
  //   marginTop: 20,
  // },
  // cardContainer: {
  //   flexDirection: 'column',
  //   width: 80,
  //   height: 120,
  //   borderRadius: 8,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 4,
  //     height: 8,
  //   },
  //   shadowOpacity: 0.48,
  //   shadowRadius: 11,
  //   elevation: 25,
  // },
  // card: {
  //   flex: 1,
  //   borderRadius: 8,
  // },
  // test: {
  //   flex: 1,
  //   padding: 8,
  // }
  timeContainer: {
    width: width / 2.53,
    height: 25,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  timeText: {
    color: 'white'
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
    // shadowOpacity: 0.48,
    // shadowRadius: 11,
    // elevation: 25,
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
});
