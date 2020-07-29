import * as React from 'react';
import {
  DefaultTheme,
  Provider as PaperProvider,
  FAB,
  Portal,
  Provider,
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {

    primary: '#D0D9FF',
    accent: 'yellow',
  },
};

export default function ActionButton() {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;
  return (
          <FAB.Group
            theme={theme}
            open={open}
            icon={require('../../images/ic_accessibility_white.png')}
            actions={[
              {
                icon: require('../../images/ic_videocam_white.png'),
                label: '사진 올리기',
                onPress: () => console.log('Pressed email'),
              },
              {
                icon: require('../../images/ic_language_white.png'),
                label: '타임라인',
                onPress: () => console.log('Pressed email'),
              },
              {
                icon: require('../../images/ic_room_white.png'),
                label: '내 사진첩',
                onPress: () => console.log('Pressed notifications'),
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
  );
}
