import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getTechs} from '../../redux/actions/techActions.js';
import {View, StyleSheet, ToastAndroid, StatusBar, Text} from 'react-native';
import {Button, Paragraph, Dialog, Portal} from 'react-native-paper';
import {TextInput, Checkbox} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const TechSelectOptions = ({
  getTechs,
  tech: {techs, loading},
  onChangeSelectTech,
}) => {
  console.log(techs);
  const [tech, setTech] = useState();

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    //   {!loading &&
    //     techs !== null &&
    // <Picker
    //   selectedValue={tech}
    //   onValueChange={(itemValue, itemIndex) => setTech(itemValue)}>

    //     techs.map(t => (
    //       <Picker.Item
    //         label={`xxxx ${t.firstName} ${t.lastName}`}
    //         value={`xxxx ${t.firstName} ${t.lastName}`}
    //       />
    //     ))
    // </Picker>}

    <Picker
      selectedValue={tech}
      onValueChange={(itemValue, itemIndex) => {
        // setTech(itemValue);
        if (itemValue !== 0) {
          onChangeSelectTech(itemValue);
        }
      }}>
      <Picker.Item label="Please select an option..." value="0" />
      {!loading &&
        techs !== null &&
        techs.map(t => (
          <Picker.Item
            label={`${t.firstName} ${t.lastName}`}
            value={`${t.firstName} ${t.lastName}`}
          />
        ))}
    </Picker>
  );
};

const mapStateToProps = state => ({
  tech: state.tech,
});

export default connect(mapStateToProps, {getTechs})(TechSelectOptions);
