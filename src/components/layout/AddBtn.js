import {FAB, Portal, Provider} from 'react-native-paper';
import {Keyboard} from 'react-native';
import React, {useState, useEffect} from 'react';
import {showModelfun, hideModel} from '../../redux/actions/modelAction.js';
import {connect} from 'react-redux';

const AddBtn = ({showMe, showModelfun}) => {
  const [state, setState] = React.useState({open: false});
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const onStateChange = ({open}) => setState({open});
  const {open} = state;

  return (
    <Portal>
      <FAB.Group
        // style={{  }}
        fabStyle={{
          backgroundColor: 'darkblue',
          height: !isKeyboardVisible ? 'auto' : 0,
          opacity: !isKeyboardVisible ? 1 : 0,
        }}
        open={open}
        icon={open ? 'close' : 'plus'}
        actions={[
          {icon: 'plus', onPress: () => console.log('Pressed add')},
          {
            icon: 'star',
            label: 'Star',
            onPress: () => console.log('Pressed star'),
          },
          {
            icon: 'email',
            label: 'Email',
            onPress: () => console.log('Pressed email'),
          },
          {
            icon: 'tooltip-plus',
            label: 'Add Log',
            onPress: () => {
              showModelfun();
            },
            small: false,
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
        }}
      />
    </Portal>
  );
};

// const mapStateToProps = state => ({
//   models: state.models,
// });

export default connect(null, {showModelfun})(AddBtn);
