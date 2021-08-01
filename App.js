import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  Searchbar,
  List,
  Card,
  Avatar,
  FAB,
  Portal,
  Provider,
} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/redux/store.js';

import Logs from './src/components/logs/Logs.js';
import SearchBar from './src/components/layout/SearchBar.js';
import AddBtn from './src/components/layout/AddBtn.js';
import TitleHeader from './src/components/layout/TitleHeader.js';
import AddLogModal from './src/components/logs/AddLogModal.js';

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [state, setState] = React.useState({open: false});
  // const [show, setShow] = React.useState(false);
  const show = React.useRef(false);

  React.useEffect(() => {
    getData();
  }, []);
  false;
  const getData = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('http://localhost:5000/logs', requestOptions)
      .then(response => response.text())
      .then(result => console.log('run again get data...', result))
      .catch(error => console.log('error', error));
  };

  const showMe = () => {
    // setShow(true);
    show.current = true;
    console.log(show.current);
  };
  const notshowme = () => {
    // setShow(false);
    // console.log(show.current);
    show.current = false;
  };

  // const onStateChange = ({open}) => setState({open});
  // const {open} = state;

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <>
      <ReduxProvider store={store}>
        <Provider>
          <StatusBar
            barStyle="light-content"
            // hidden={false}
            backgroundColor="darkblue"
            // translucent={true}
          />
          <SearchBar />
          {console.log('app,js run again...page....')}
          <View style={{flex: 1}}>
            {/* <View
            style={{
              justifContyent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'grey',
              paddingVertical: 10,
              margin: 5,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>data title</Text>
          </View> */}
            <TitleHeader title="System Logs" />
            <ScrollView>
              <Logs />
            </ScrollView>
            <AddLogModal show={show.current} notshowme={notshowme} />
            <AddBtn showMe={showMe} />
            {/* <List.Item
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
          titleStyle={{color: 'red'}}
          title="First Item"
          description="Item description"
          right={props => <List.Icon {...props} icon="delete" />}
        />
        <List.Item
          style={{
            justifContyent: 'center',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderColor: 'grey',
            paddingVertical: 10,
            marginHorizontal: 5,
          }}
          titleStyle={{color: 'blue'}}
          title="First Item"
          description={`fefefoemfoemofo knknininin`}
          right={props => (
            <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
              <List.Icon {...props} icon="delete" />
              <View style={{margin: 0, padding: 0}}>
                <Text style={{color: 'grey'}}>10/2/3 2.3.2.2</Text>
              </View>
            </View>
          )}
        /> */}
            {/* <Button icon="camera" mode="contained" onPress={() => getData()}>
            Press me
          </Button> */}
          </View>
        </Provider>
      </ReduxProvider>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
