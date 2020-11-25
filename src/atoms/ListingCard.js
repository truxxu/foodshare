import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

import {Spacing, Typography} from '../styles';
import {Bubbles} from './Bubbles';

const ListingCard = ({data}) => {
  const item = data.item;

  return (
    <TouchableOpacity style={styles.container}>
      <Text>{item.title}</Text>
      <Text style={styles.secondaryText}>{item.distance}m away</Text>
      <View style={styles.content}>
        <View style={styles.description}>
          <Text>{item.description}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Bubbles />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    maxHeight: 130,
    width: '100%',
    borderRadius: 5,
    padding: 5,
    ...Spacing.shadow,
    marginBottom: 10,
  },
  secondaryText: {
    ...Typography.secondary,
  },
  content: {
    flexDirection: 'row',
  },
  description: {
    width: '75%',
  },
  imageContainer: {
    width: '25%',
    display: 'flex',
    ...Spacing.centered,
  },
  image: {
    height: 85,
    width: 85,
    borderRadius: 50,
    backgroundColor: 'red',
  },
});

export {ListingCard};
