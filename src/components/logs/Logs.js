import React from 'react';
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
import {connect} from 'react-redux';
// import { getLogs } from '../../actions/logActions';

import {getLogs} from '../../redux/actions/logActions.js';
import LogItem from './LogItem.js';
import Preloader from '../layout/preloader.js';

const Logs = ({log: {logs, loading}, getLogs}) => {
  React.useEffect(() => {
    getLogs();
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <View>
      {!loading && logs.length === 0 ? (
        <View
          style={{
            justifContyent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'grey',
            paddingVertical: 10,
            margin: 5,
          }}>
          <Text style={{fontSize: 20, color: 'grey'}}>No Logs Found</Text>
        </View>
      ) : (
        <View style={{ marginBottom: 20}}>
        <FlatList
          data={logs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <LogItem item={item} />}
        />
        </View>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  log: state.log,
});

export default connect(mapStateToProps, {getLogs})(Logs);
