import React from 'react';
import { View, Text } from 'react-native';
import ParsedText from 'react-native-parsed-text';

const renderText = (matchingString, matches) => {
  // matches => ["[@michel:5455345]", "@michel", "5455345"]
  // let pattern = /\[(@[^:]+):([^\]]+)\]/i;
  // let match = matchingString.match(pattern);
  return (
    <View style={{backgroundColor: '#dcdcdc', borderRadius: 20, padding: 5}}>
      <Text style={styles.hashTag}>{matchingString}</Text>
    </View>
  );
};

export default function hashTag() {
  return (
    <View>
      <ParsedText
        parse={[
          {
            pattern: /(#[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9\d-]+)(?![^<]*>|[^<>]*<\/)/,
            onPress: () => {
              alert('해시태그 누름');
            },
            renderText: renderText,
          },
        ]}
        childrenProps={{allowFontScaling: false}}>
        #아침 #하루한장 #악필탈출 #사진에 #시계 #어때여
      </ParsedText>
    </View>
  );
}
