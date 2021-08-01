import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ToastAndroid, StatusBar, Text} from 'react-native';
// import TechSelectOptions from '../techs/TechSelectOptions';
import {connect} from 'react-redux';
import {showModelfun, hideModel} from '../../redux/actions/modelAction.js';
import {Button, Paragraph, Dialog, Portal} from 'react-native-paper';
import {TextInput, Checkbox} from 'react-native-paper';
import TechSelectOptions from '../techs/TechSelectOptions.js';
import {Picker} from '@react-native-picker/picker';
import {getTechs} from '../../redux/actions/techActions.js';
import {addLog} from '../../redux/actions/logActions.js';

const AddLogModal = ({
  models: {showmodel},
  tech: {techs, loading},
  addLog,
  hideModel,
  getTechs,
  showModelfun,
}) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState();

  const onChangeSelectTech = name => {
    setTech(name);
  };

  useEffect(() => {
    getTechs();
  }, []);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      ToastAndroid.show('you forget to enter something!', ToastAndroid.SHORT);
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };

      addLog(newLog);
      hideModel();
      ToastAndroid.show(`Log added by! ${tech}`, ToastAndroid.SHORT);

      // Clear Fields
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    <View>
      <Portal>
        {console.log('add log modal..render all the time.....')}
        <Dialog visible={showmodel} onDismiss={hideModel}>
          <Dialog.Title>Add Log Modal</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Message"
              value={message}
              onChangeText={message => setMessage(message)}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Checkbox
                color="red"
                status={attention ? 'checked' : 'unchecked'}
                onPress={() => {
                  setAttention(!attention);
                }}
              />
              <Text>Need Attention</Text>
            </View>
            <TechSelectOptions onChangeSelectTech={onChangeSelectTech} />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideModel}>Cancel</Button>
            <Button onPress={onSubmit}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const mapStateToProps = state => ({
  models: state.models,
  tech: state.tech,
});

export default connect(mapStateToProps, {
  showModelfun,
  hideModel,
  getTechs,
  addLog,
})(AddLogModal);
