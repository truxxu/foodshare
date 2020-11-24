import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

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
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 50,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export {RoundButton};
