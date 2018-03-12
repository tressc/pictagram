import { RECEIVE_CURRENT_USER, LOGOUT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const sessionReducer = (state = { currentUser: null }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser});
    case LOGOUT_USER:
      return { currentUser: null};
    default:
      return state;
  }
};

export default sessionReducer;
