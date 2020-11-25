import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {RoundButton} from '../atoms';

const ListButtons = () => {
  return (
    <View style={styles.container}>
      <RoundButton color="green">
        <Icon name="text-box-plus" size={25} color="white" />
      </RoundButton>
      <RoundButton color="blue">
        <Icon name="map" size={25} color="white" />
      </RoundButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 9,
  },
});

export {ListButtons};
