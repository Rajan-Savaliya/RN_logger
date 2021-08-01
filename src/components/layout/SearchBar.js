import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {searchLogs} from '../../redux/actions/logActions';
import {Searchbar as SeachComponent} from 'react-native-paper';

const SearchBar = ({searchLogs}) => {
    const [searchQuery, setSearchQuery] = React.useState('');
  const text = useRef('');

  // const onChange = e => {
  //   searchLogs(text.current.value);
  // };

  const onChangeSearch = query => searchLogs(query);

  return (
    <SeachComponent
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={text}
    />
  );
};

export default connect(null, {searchLogs})(SearchBar);
