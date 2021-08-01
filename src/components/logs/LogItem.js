import React from 'react';
import {connect} from 'react-redux';
import {deleteLog, setCurrent} from '../../redux/actions/logActions.js';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import {
  Searchbar,
  List,
  Card,
  Avatar,
  FAB,
  Portal,
  Provider,
  Button,
  IconButton,
} from 'react-native-paper';

const LogItem = ({item, deleteLog, setCurrent}) => {
  const onDelete = () => {
    deleteLog(item.id);
  };

  return (
    <>
      {console.log('render again and again...', item.id)}
      <List.Item
        style={{
          justifContyent: 'center',
          alignItems: 'center',
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderColor: 'grey',
          paddingVertical: 10,
          marginHorizontal: 5,
        }}
        titleStyle={{color: item.attention ? 'red' : 'blue'}}
        title={item.message}
        description={item.tech}
        right={props => (
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <IconButton {...props} icon="delete-circle" onPress={onDelete} />
          </View>
        )}
      />
    </>
  );
};

export default connect(null, {deleteLog, setCurrent})(LogItem);
