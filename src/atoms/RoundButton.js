import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import {Spacing} from '../styles';

const RoundButton = ({children, color}) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: color}]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 60,
  },
  buttonStyle: {
    display: 'flex',
    ...Spacing.centered,
    height: 50,
    width: 50,
    borderRadius: 25,
    margin: 5,
    ...Spacing.shadow,
  },
});

export {RoundButton};
