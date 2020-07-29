import React, { useRef, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Animated,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { FloatingAction } from "react-native-floating-action";
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';

import ActionButton from '../example/component/ActionButton';
const DUMMY = [
  {
    key: '1',
    uri: 'http://th4.tmon.kr/thumbs/image/fd8/181/8b4/ca2c479ba_700x700_95_FIT.jpg'
  },
  {
    key: '2',
    uri: 'https://cdn.crowdpic.net/detail-thumb/thumb_d_CB2B75ACB48E4F9F5F5CF9435A1951C5.jpg'
  },
  {
    key: '3',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLWsHx1Y-MvTu9qddc1nGev9O6m41jSG9FSQ&usqp=CAU'
  },
];

const DUMMY2 = [
  {
    key: '1',
    uri: 'https://th1.tmon.kr/thumbs/image/06b/9a5/04c/1d318c923_700x700_95_FIT.jpg'
  },
  {
    key: '2',
    uri: 'https://i.pinimg.com/originals/1d/a6/f3/1da6f34fc09ca58ab7db66f0fcb0edcd.jpg'
  },
  {
    key: '3',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3msybCyHvVJ3bjjSbPQ87xHXCe5NP8RLvAw&usqp=CAU'
  },
];

const DUMMY3 = [
  {
    key: '1',
    uri: 'https://dangolgongjang.s3.ap-northeast-2.amazonaws.com/images/planning/products/c06168eae7e24440abb3749fa4c09201_44_java_main.002.jpeg',
    text: '좋은 만년필 추천'
  },
  {
    key: '2',
    uri: 'https://media.sandollcloud.com/static/images/contents/typesetcompany/082_Typeset_BadGraphyR_detail_01.jpg',
    text: '악필 개선'
  },
  {
    key: '3',
    uri: 'https://www.fnnews.com/resource/media/image/2018/11/12/201811120056038656_l.jpg',
    text: '내가 악필이다'
  },
];



export default function MainScreen() {

  const {colors} = useTheme();

  // useEffect(() => {
  //   // if (active) {
  //     Animated.timing(opacity, {
  //       toValue: 1,
  //       duration: 200,
  //       useNativeDriver: true
  //     }).start();
  //   // } else {
  //   //   opacity.setValue(0)
  //   // }
  // }, [active, opacity]); // <- Works fine without `opacity`, but eslint wants this

  // useEffect(() => {
  //   Animated.timing(aniFAB, {
  //     toValue: 1,
  //     duration: 200,
  //     useNativeDriver: true
  //   }).start();
  // }, []);

  // const pressFAB = () => {
  //   Animated.timing(aniFAB, {
  //     toValue: 1,
  //     duration: 200,
  //     useNativeDriver: true
  //   }).start();
  // };

  const _renderItem = ({item, key}) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.card}>
          <ImageBackground
            style={styles.image}
            imageStyle={{borderRadius: 8}}
            source={{
              uri: item.uri,
            }}
          >
            <Text style={{marginLeft: 5}}>{item.key}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  const _renderItem2 = ({item, key}) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.card}>
          <ImageBackground
            style={styles.image}
            imageStyle={{borderRadius: 8}}
            source={{
              uri: item.uri,
            }}
            
          >
            <Text style={{marginLeft: 5}}>{item.key}</Text>
            <Text style={{marginLeft: 5, marginBottom: 8}}>{item.text}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <ScrollView style={{marginHorizontal: 10}}>
        <View style={{flex: 1, justifyContent: 'center', marginBottom: 25}}>
          <View style={{alignItems: 'flex-start', marginLeft: 8}}>
            <Text
              style={{
                ...styles.text1,
                fontSize: 40,
                marginBottom: 15,
                marginTop: 30,
                color: colors.text,
              }}>
              오늘의 글귀
            </Text>
          </View>
          <Text
            style={{...styles.text2, color: colors.text}}>{`" 당신의 하루가\n   별보다 빛나길 "`}</Text>
        </View>
        <View>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-around',
            }}
            data={DUMMY}
            renderItem={_renderItem}
            horizontal={true}
          />
        </View>

        <View style={styles.line} />

        <View style={{flex: 1, justifyContent: 'center', marginBottom: 25}}>
          <View style={{alignItems: 'flex-start', marginLeft: 8}}>
            <Text
              style={{
                ...styles.text1,
                fontSize: 40,
                marginBottom: 15,
                marginTop: 30,
                color: colors.text,
              }}>
              Best 글씨체
            </Text>
          </View>
        </View>
        <View>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-around',
            }}
            data={DUMMY2}
            renderItem={_renderItem}
            horizontal={true}
          />
        </View>

        <View style={styles.line} />

        <View style={{flex: 1, justifyContent: 'center', marginBottom: 25}}>
          <View style={{alignItems: 'flex-start', marginLeft: 8}}>
            <Text
              style={{
                ...styles.text1,
                fontSize: 40,
                marginBottom: 15,
                marginTop: 30,
                color: colors.text,
              }}>
              한번 보고가세요
            </Text>
          </View>
        </View>
        <View>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-around',
            }}
            data={DUMMY3}
            renderItem={_renderItem2}
            horizontal={true}
          />
        </View>

        <View style={styles.line} />
      </ScrollView>

      <ActionButton/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'SDMiSaeng',
  },
  text2: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: '나눔손글씨_손편지체',
  },
  text3: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: '나눔손글씨_금은보화1',
  },
  text4: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'NanumMyeongjo',
  },
  card: {
    width: 120,
    height: 170,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  line: {
    marginTop: 20,
    height: 1,
    backgroundColor: '#dddfe2',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});