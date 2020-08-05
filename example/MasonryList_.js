import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text, ImageBackground, Dimensions, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {Avatar, Input, SearchBar} from 'react-native-elements';
import MasonryList from 'react-native-masonry-list';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import {DUMMY, tagDUMMY, tagDUMMY2} from '../data/dummy';
import TwitterTextView from 'react-native-twitter-textview';
import ParsedText from 'react-native-parsed-text';
import { useTheme } from '@react-navigation/native';
// import Icon from 'react-native-dynamic-vector-icons';

const { height, width } = Dimensions.get("window");
const myAvatar = 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/128009228/original/8e8ad34b012b46ebd403bd4157f8fef6bb2c076b/design-minimalist-flat-cartoon-caricature-avatar-in-6-hours.jpg';

export default function MasonryList_() {
  const [search, setSearch] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('');
  const [view, setView] = useState(0);
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');

  const {colors} = useTheme();

  const updateSearch = (search) => {
    setSearch(search);
  };

  const cancelSearch = () => {
      setSearch('');
  };

  const addMoreImages = (newImages) => {
    this.setState({
      images: this.state.images.concat(newImages),
    });
  };

  const toggleModal = (item, index) =>  {
    setModalVisible(!isModalVisible);
    setImage(item);
    setView(item.view);
    setName(item.name);
    setAvatar(item.avatarUri);
  };

  const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const tagList = ({item, index}) => {
    return(
      <View style={{backgroundColor: randomColor(), ...styles.tagBox }}>
        <Text style={{color: 'white'}}>{item.text}</Text>
      </View>
    );
  };

  const tagModal = ({item, index}) => {
    return (
      <View style={{backgroundColor: '#dcdcdc', borderRadius: 20, padding: 6, marginRight: 5}}>
        <Text style={styles.hashTag}>#{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <SearchBar
        placeholder="여기에 검색..."
        onChangeText={updateSearch}
        value={search}
        round={true}
        containerStyle={{
          ...styles.headerContainer,
          backgroundColor: colors.background,
        }}
        inputContainerStyle={{
          ...styles.headerInput,
          backgroundColor: colors.background,
          borderColor: colors.border,
        }}
      />

      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{height: 50, marginBottom: 8}}
        horizontal={true}
        data={tagDUMMY}
        renderItem={tagList}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <MasonryList
            images={DUMMY}
            columns={2}
            listContainerStyle={{
              ...styles.listContainer,
              backgroundColor: colors.background,
            }}
            imageContainerStyle={styles.imageContainer}
            onPressImage={toggleModal}
            backgroundColor={colors.background}
          />
        </View>
      </ScrollView>

      <Modal
        isVisible={isModalVisible}
        style={styles.modal}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down">
        <View style={{alignItems: 'center', marginBottom: 8}}>
          <View style={styles.modalHandle} />
        </View>

        <View style={styles.modalContainer}>
          
            <ImageBackground
              source={image}
              style={styles.image1}
              imageStyle={styles.image2}
              resizeMode='contain'>
              <LinearGradient
                style={styles.gradientView}
                colors={['#00000000', '#2e2e2e']}>
                <Avatar rounded size="small" source={{uri: avatar}} />
                <Text style={{marginLeft: 8, color: '#e2e2e2'}}>{name}</Text>
              </LinearGradient>
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
                <Text>{view}</Text>
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

            <ScrollView>
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
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 8,
  },
  imageContainer: {
    borderRadius: 8,
    margin: 5,
  },
  headerContainer: {
    paddingVertical: 8,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  headerInput: {
    borderBottomWidth: 2,
    borderWidth: 2,
  },
  tagBox: {
    borderRadius: 20,
    // backgroundColor: '#FF453A',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 12,
    marginRight: 5,
  },
  modal: {
    margin: 0, // This is the important style you need to set
    marginTop: 18,
    alignItems: undefined,
    justifyContent: undefined,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
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
    width: '100%',
    
    justifyContent: 'flex-end',
  },
  image2: {
    
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  gradientView: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
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
  