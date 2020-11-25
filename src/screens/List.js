import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import {ListButtons} from '../molecules';
import {ListingCard} from '../atoms';

const List = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ListButtons />
      <ScrollView>
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});

export {List};
