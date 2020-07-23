import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import MasonryList from 'react-native-masonry-list';
import SearchBar from "react-native-dynamic-search-bar";


const DUMMY = [
    { id: 1, uri: 'https://cdn.pixabay.com/photo/2020/07/02/07/06/goldcrest-5361996_960_720.jpg'},
    { id: 2, uri: 'https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png'},
    { id: 3, uri: 'https://cdn.pixabay.com/photo/2012/03/01/00/21/bridge-19513_960_720.jpg'},
    { id: 4, uri: 'https://cdn.pixabay.com/photo/2014/03/26/17/50/sunset-298850_960_720.jpg'},
    { id: 5, uri: 'https://cdn.pixabay.com/photo/2012/02/29/11/53/surfer-18661_960_720.jpg'},
    { id: 6, uri: 'https://cdn.pixabay.com/photo/2015/12/27/21/11/paradise-1110498_960_720.jpg'},
    { id: 7, uri: 'https://cdn.pixabay.com/photo/2020/07/14/13/42/boat-5404195_960_720.jpg'},
    { id: 8, uri: 'https://cdn.pixabay.com/photo/2014/12/15/17/16/pier-569314_960_720.jpg'},
    { id: 9, uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'},
    { id: 10, uri: 'https://cdn.pixabay.com/photo/2020/07/08/08/07/daisy-5383056__340.jpg'},
    { id: 11, uri: 'https://cdn.pixabay.com/photo/2020/07/14/22/10/woman-5405866__340.jpg'},
    { id: 12, uri: 'https://cdn.pixabay.com/photo/2020/07/11/06/18/beautiful-parakeet-5392861__340.jpg'},
    { id: 13, uri: 'https://cdn.pixabay.com/photo/2020/07/08/05/31/gray-cat-5382617__340.jpg'},
    { id: 14, uri: 'https://cdn.pixabay.com/photo/2020/07/04/06/25/girl-5368401__340.jpg'},
    { id: 15, uri: 'https://cdn.pixabay.com/photo/2020/07/11/16/26/cup-5394600__340.jpg'},
    { id: 16, uri: 'https://cdn.pixabay.com/photo/2020/07/08/21/20/steppevos-5385229__340.jpg'},
    { id: 17, uri: 'https://cdn.pixabay.com/photo/2020/07/20/11/33/gopher-5422685__340.jpg'},
    { id: 18, uri: 'https://cdn.pixabay.com/photo/2020/07/21/08/52/sw-5425648__340.jpg'},
    { id: 19, uri: 'https://cdn.pixabay.com/photo/2020/07/18/16/47/house-5417721__340.jpg'},
    { id: 20, uri: 'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930__340.jpg'},
    
    
];

const DUMMY2 = [
  {
    URL:
      'https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg',
  },
  {
    uri:
      'https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg',
  },
  {
    source: {
      uri:
        'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
    },
  },
  {
    uri:
      'https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg',
    // Optional: Adding a dimensions field with
    // the actual width and height for REMOTE IMAGES
    // will help improve performance.
    dimensions: {width: 1080, height: 1920},
  },
  {
    URI:
      'https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg',
    // Optional: Does not require an id for each
    // image object, but is for best practices.
    id: 'blpccx4cn',
  },
  {
    url:
      'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
  },
];

export default function MasonryList_() {
  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    setSearch(search);
  };

  const cancelSearch = () => {
      setSearch('');
  }
  const addMoreImages = (newImages) => {
    this.setState({
      images: this.state.images.concat(newImages),
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search here"
        onChangeText={updateSearch}
        onPressCancel={cancelSearch}
        onPress={() => alert('onPress')}
      />
      <MasonryList
        images={DUMMY}
        columns={3}
        listContainerStyle={styles.listContainer}
        imageContainerStyle={styles.imageContainer}

        //   onPressImage={}
        // Version *2.14.0 update
        // onEndReached={() => {
        //     // add more images when scrolls reaches end
        // }}
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
    borderRadius: 8,
    margin: 5,
  },
  searchContainer: {
      marginHorizontal: 10
  }
});
  