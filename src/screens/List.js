import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {RoundButton} from '../atoms';

const List = () => {
  return (
    <View>
      <Text>List Screen</Text>
      <RoundButton color="green">
        <Icon name="text-box-plus" size={50} color="white" />
      </RoundButton>
      <RoundButton color="blue">
        <Icon name="map" size={50} color="white" />
      </RoundButton>
    </View>
  );
};

export {List};
