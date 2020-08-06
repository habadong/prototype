import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import AutoHeightImage from 'react-native-auto-height-image';

import {DUMMY, tagDUMMY, tagDUMMY2} from '../../data/dummy';

const { height, width } = Dimensions.get("window");
const myAvatar = 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/128009228/original/8e8ad34b012b46ebd403bd4157f8fef6bb2c076b/design-minimalist-flat-cartoon-caricature-avatar-in-6-hours.jpg';

export default function Madals(props) {

    const [isModalVisible, setModalVisible] = useState(true);

    const tagModal = ({item, index}) => {
        return (
          <View style={{backgroundColor: '#dcdcdc', borderRadius: 20, padding: 6, marginRight: 5}}>
            <Text style={styles.hashTag}>#{item.text}</Text>
          </View>
        );
      };
    console.log('props: ', props);

    const changeModal = () => {
        setModalVisible(false);
        // 바꾸ㅓ 야 할 곳 임 하
    };

  return (
    <Modal
      isVisible={props.isVisible}
      style={styles.modal}
      onSwipeComplete={changeModal}
      swipeDirection="down">
      <View style={{alignItems: 'center', marginBottom: 8}}>
        <View style={styles.modalHandle} />
      </View>

      {/* <View style={styles.modalContainer}> */}
      <ScrollView style={styles.modalContainer}>
        <ImageBackground
          source={props.image}
          style={styles.image1}
          imageStyle={styles.image2}>
          {/* <AutoHeightImage style={styles.image2} width={width} source={image}></AutoHeightImage> */}
          <View style={styles.gradientView}>
            {/* <LinearGradient
                style={styles.gradientView}
                colors={['#00000000', '#00000070']}> */}
            <Avatar rounded size="small" source={{uri: props.avatar}} />
            <Text style={{marginLeft: 8, color: '#e2e2e2'}}>{props.name}</Text>
            {/* </LinearGradient> */}
          </View>
        </ImageBackground>

        <View style={styles.innerContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 5,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="eye-sharp" size={18} />
              <Text>{props.view}</Text>
            </View>
            <Text>감성지수 90%</Text>
          </View>

          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={tagDUMMY2}
              renderItem={tagModal}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 5,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Avatar rounded size="small" source={{uri: myAvatar}} />
              <TextInput
                style={{maxWidth: 250}}
                placeholder="내용을 입력해주세요(100자 이내)"
                multiline={true}
                maxLength={100}></TextInput>
            </View>
            <TouchableOpacity>
              <Icon name="send-sharp" size={20} />
            </TouchableOpacity>
          </View>

          <View style={styles.separation}></View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Avatar rounded size="small" source={{uri: myAvatar}} />
            <Text style={{marginHorizontal: 8}}>손님1</Text>
            <Text>스크롤 뷰</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Avatar rounded size="small" source={{uri: myAvatar}} />
            <Text style={{marginHorizontal: 8}}>손님1</Text>
            <Text>말고</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Avatar rounded size="small" source={{uri: myAvatar}} />
            <Text style={{marginHorizontal: 8}}>손님1</Text>
            <Text>flatlist로 해야</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Avatar rounded size="small" source={{uri: myAvatar}} />
            <Text style={{marginHorizontal: 8}}>손님1</Text>
            <Text>함</Text>
          </View>
        </View>
      </ScrollView>
      {/* </View> */}
    </Modal>
  );
}

const styles = StyleSheet.create({
    modal: {
      margin: 0, // This is the important style you need to set
      marginTop: 18,
      alignItems: undefined,
      justifyContent: undefined,
    },
    modalContainer: {
      flex: 1,
      // alignItems: 'center',
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    innerContainer: {
      width: width,
      marginVertical: 8,
    },
    modalHandle: {
      backgroundColor: 'gray',
      width: 100,
      height: 5,
      borderRadius: 8,
    },
    image1: {
      flex: 1,
      // width: width,
      // width: undefined,
      height: 250,
      justifyContent: 'flex-end',
    },
    image2: {
      // height: height,
      resizeMode: 'contain',
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    gradientView: {
      height: 70,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 8,
      backgroundColor: '#00000030',
    },
    separation: {
      marginVertical: 8,
      borderWidth: 1,
      borderColor: '#a0a0a0',
    },
    hashTag: {
      color: '#000000',  
    },
  });
    