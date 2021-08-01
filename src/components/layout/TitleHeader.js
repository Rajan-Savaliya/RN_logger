import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

const TitleHeader = ({title}) => {
  return (
    <View
      style={{
        justifContyent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        paddingVertical: 10,
        margin: 5,
      }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
    </View>
  );
};

export default TitleHeader;
