import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import { ActivityIndicator} from 'react-native-paper';
import Modal from 'react-native-modal';

const Preloader = () => {
  return (
    <Modal isVisible={true}>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#fff',
          flexDirection: 'row',
          borderRadius: 8,
          paddingVertical: 20,
        }}>
        <ActivityIndicator
          animating={true}
          color="#6739b7"
          style={{marginLeft: 30}}
          size={40}
        />
        <View style={{marginLeft: 25}}>
          <Text style={{color: 'grey', fontSize: 15}}> Loading...</Text>
        </View>
      </View>
    </Modal>
  );
};

export default Preloader;
