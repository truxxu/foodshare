import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Spacing, Typography} from '../styles';

const Bubbles = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image} />
      <View style={styles.counter}>
        <Text>5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 85,
    width: 85,
    borderRadius: 50,
    backgroundColor: 'lightblue',
    borderColor: 'gray',
    borderWidth: 2,
    ...Spacing.shadow,
  },
  counter: {
    position: 'absolute',
    top: 5,
    right: 0,
    ...Spacing.centered,
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: 'lightblue',
    borderColor: 'gray',
    borderWidth: 1.5,
    ...Spacing.shadow,
  },
});

export {Bubbles};
