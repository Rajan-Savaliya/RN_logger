import {SHOW_MODEL, HIDE_MODEL} from './types';

export const showModelfun = () => async dispatch => {
  console.log('action is show the action.....true model showModel');
  dispatch({
    type: SHOW_MODEL,
    payload: true,
  });
};

export const hideModel = () => async dispatch => {
  console.log('model do not show hind the model');
  dispatch({
    type: HIDE_MODEL,
    payload: false,
  });
};
