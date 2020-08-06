import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text, ImageBackground, Dimensions, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {Avatar, Input, SearchBar} from 'react-native-elements';
import MasonryList from 'react-native-masonry-list';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import { useTheme } from '@react-navigation/native';

import {DUMMY, tagDUMMY, tagDUMMY2} from '../data/dummy';
import Modals from './component/Madals';
import AutoHeightImage from 'react-native-auto-height-image';

const { height, width } = Dimensions.get("window");

export default function MasonryList_() {
  const [search, setSearch] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('');
  const [view, setView] = useState(0);
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');

  const {colors} = useTheme();
  
  console.log(isModalVisible);

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

  const changeModal = (visible) => {
    setModalVisible(visible);
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

      <Modals
        isVisible={isModalVisible}
        image={image}
        view={view}
        avatar={avatar}
        name={name}
        onChange={changeModal}
      />
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
    borderRadius: 20,
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
});
  