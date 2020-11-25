import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {Spacing} from '../styles';

const ListingCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>ListingCard</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    width: '100%',
    borderRadius: 5,
    padding: 5,
    ...Spacing.shadow,
    marginBottom: 10,
  },
});

export {ListingCard};
