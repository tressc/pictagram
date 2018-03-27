import { RECEIVE_LIKE, DESTROY_LIKE} from '../actions/like_actions';
import { RECEIVE_IMAGE, RECEIVE_IMAGES } from '../actions/image_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const likeReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_IMAGE:
      return merge({}, state, action.likes);
    case RECEIVE_IMAGES:
      return merge({}, state, action.likes);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.likes);
    case RECEIVE_USER:
      return merge({}, state, action.likes);
    case RECEIVE_LIKE:
      return merge({}, state, {[action.like.id]: action.like});
    case DESTROY_LIKE:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default likeReducer;
