import { RECEIVE_IMAGE, RECEIVE_IMAGES, REMOVE_IMAGE } from '../actions/image_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const imageReducer = (state = { images: {} }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_IMAGES:
      return merge({}, state, action.images);
    case RECEIVE_IMAGE:
      return merge({}, state, {[action.image.id]: action.image});
    case REMOVE_IMAGE:
      return {};
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {images: action.images});
    case RECEIVE_USER:
      return merge({}, state, action.user.images);
    default:
      return state;
  }
};

export default imageReducer;
