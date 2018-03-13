import { RECEIVE_USER } from '../actions/user_actions';
import { DESTROY_IMAGE } from '../actions/image_actions';
import { merge } from 'lodash';

const userReducer = (state = { users: {} }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case DESTROY_IMAGE:
      let newState = merge({}, state);
      let idx = newState[Object.keys(newState)[0]].images.indexOf(action.id.toString());
      delete newState[Object.keys(newState)[0]].images[idx];
      debugger
      return newState;
    case RECEIVE_USER:
    const imgIds = Object.keys(action.user.images);
      return merge({}, state, {[action.user.user.id]:
        {user: action.user.user,
        images: imgIds}
      });
    default:
      return state;
  }
};

export default userReducer;
