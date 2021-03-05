import React from 'react';
import {Text, TextInput, View, StyleSheet} from "react-native";

const LoanRowInput = props => {
  return (
    <View style={styles.row}>
      <Text
        style={styles.text}>
        {props.label}
      </Text>
      <TextInput
        placeholder={props.defaultValue}
        onChangeText={value => props.onChangeValue(value)}
        style={styles.textbox}
      />
  </View>
  );
};

const styles = StyleSheet.create( {
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    width: '90%',
  },
  text: {
    color: 'rgb(34,150,255)',
    flex: 2,
    textAlign: 'right',
    padding: 4,
  },
  textbox: {
    backgroundColor: 'rgba(120,199,245,0.8)',
    flex: 3,
    padding: 4,
  },
} );

export default LoanRowInput;