import {SHOW_MODEL, HIDE_MODEL} from '../actions/types';

const initialState = {
  showmodel: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODEL:
      return {
        ...state,
        showmodel: true,
      };
    case HIDE_MODEL:
      return {
        ...state,
        showmodel: false
      };
    default:
      return state;
  }
};
