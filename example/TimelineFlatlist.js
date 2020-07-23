import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import LinearGradient from 'react-native-linear-gradient';
const DUMMY = [
  {
    time: '09:00',
    title: 'Archery Training',
    description:
      'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
  },
  {
    time: '10:45',
    title: 'Play Badminton',
    description:
      'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
  },
  {time: '12:00', title: 'Lunch', icon: require('../images/lunch.png')},
  {
    time: '14:00',
    title: 'Watch Soccer',
    description:
      'Team sport played between two teams of eleven players with a spherical ball. ',
  },
  {
    time: '16:30',
    title: 'Go to Fitness center',
    description: 'Look out for the Best Gym & Fitness Centers around me :)',
  },
];

const DUMMY2 = [
  {
    time: '09:00',
    title: 'Archery Training',
    description:
      'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
    circleColor: 'gray',
    lineColor: 'gray',
  },
  {
    time: '10:45',
    title: 'Play Badminton',
    description:
      'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
  },
  {time: '12:00', title: 'Lunch', icon: require('../images/lunch.png')},
  {
    time: '14:00',
    title: 'Watch Soccer',
    description:
      'Team sport played between two teams of eleven players with a spherical ball. ',
    lineColor: 'gray',
  },
  {
    time: '16:30',
    title: 'Go to Fitness center',
    description: 'Look out for the Best Gym & Fitness Centers around me :)',
    circleColor: 'gray',
  },
];

export default function App() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [data1, setData1] = useState([]);

  const onRefresh = () => {
    setIsRefreshing(true);
    // this.setState({isRefreshing: true});
    //refresh to initial data
    setTimeout(() => {
      //refresh to initial data
      // this.setState({
      //   data: this.data,
      //   isRefreshing: false,
      // });
      setData1(DUMMY);
      setIsRefreshing(false);
    }, 2000);
  };

  const onEndReached = () => {
    if (!waiting) {
      setWaiting(true);
      // this.setState({waiting: true});

      //fetch and concat data
      setTimeout(() => {
        //refresh to initial data
        var data = data1.concat([
          {
            time: '18:00',
            title: 'Load more data',
            description: 'append event at bottom of timeline',
          },
          {
            time: '18:00',
            title: 'Load more data',
            description: 'append event at bottom of timeline',
          },
          {
            time: '18:00',
            title: 'Load more data',
            description: 'append event at bottom of timeline',
          },
          {
            time: '18:00',
            title: 'Load more data',
            description: 'append event at bottom of timeline',
          },
          {
            time: '18:00',
            title: 'Load more data',
            description: 'append event at bottom of timeline',
          },
        ]);
        // var data = this.state.data.concat([
        //   {
        //     time: '18:00',
        //     title: 'Load more data',
        //     description: 'append event at bottom of timeline',
        //   },
        //   {
        //     time: '18:00',
        //     title: 'Load more data',
        //     description: 'append event at bottom of timeline',
        //   },
        //   {
        //     time: '18:00',
        //     title: 'Load more data',
        //     description: 'append event at bottom of timeline',
        //   },
        //   {
        //     time: '18:00',
        //     title: 'Load more data',
        //     description: 'append event at bottom of timeline',
        //   },
        //   {
        //     time: '18:00',
        //     title: 'Load more data',
        //     description: 'append event at bottom of timeline',
        //   },
        // ]);

        setWaiting(false);
        setData1(data);
        // this.setState({
        //   waiting: false,
        //   data: data,
        // });
      }, 2000);
    }
  };

  const renderFooter = () => {
    if (waiting) {
      return <ActivityIndicator />;
    } else {
      return <Text>~</Text>;
    }
  };

  return (
    <LinearGradient
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#70e1f5', '#ffd194']}>
      <Timeline
        data={DUMMY2}
        style={styles.list}
        circleSize={20}
        dotSize={10}
        circleColor="gray"
        lineColor="gray"
        timeContainerStyle={{minWidth: 52, marginTop: -5}}
        timeStyle={{
          textAlign: 'center',
          // backgroundColor: '#ff9797',
          color: 'black',
          padding: 5,
          borderRadius: 13,
        }}
        descriptionStyle={{color: 'gray'}}
        options={{
          style: {paddingTop: 5},
        }}
        innerCircle={'dot'}
        columnFormat="two-column"
      />
      {/* <Timeline
        style={styles.list}
        data={data1}
        circleSize={20}
        circleColor="rgb(45,156,219)"
        lineColor="rgb(45,156,219)"
        timeContainerStyle={{minWidth: 52, marginTop: -5}}
        timeStyle={{
          textAlign: 'center',
          backgroundColor: '#ff9797',
          color: 'white',
          padding: 5,
          borderRadius: 13,
        }}
        descriptionStyle={{color: 'gray'}}
        options={{
          style: {paddingTop: 5},
          refreshControl: (
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          ),
          renderFooter: renderFooter,
          onEndReached: onEndReached,
        }}
        innerCircle={'dot'}
      /> */}
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
