import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import {ListButtons, CardList} from '../molecules';

const List = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ListButtons />
      <CardList />
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
