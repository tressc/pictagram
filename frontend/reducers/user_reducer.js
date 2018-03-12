import { RECEIVE_USER } from '../actions/user_actions';
// import { DESTROY_IMAGE } from '../actions/image_actions';
import { merge } from 'lodash';

const userReducer = (state = { users: {} }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, {[action.user.user.id]: action.user});
    default:
      return state;
  }
};

export default userReducer;
