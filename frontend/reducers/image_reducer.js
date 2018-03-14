import { RECEIVE_IMAGE, RECEIVE_IMAGES, DESTROY_IMAGE } from '../actions/image_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const imageReducer = (state = { images: {} }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_IMAGES:
      return merge({}, state, action.images);
    case RECEIVE_IMAGE:
      return merge({}, state, {[action.image.id]: {img_url: action.image.image_url, id: action.image.id, author_id: action.image.author_id}});
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {images: action.images});
    case RECEIVE_USER:
      return merge({}, state, action.user.images);
    case DESTROY_IMAGE:
      let newState = merge({}, state);
      delete newState[action.id];
      if (newState.images[action.id]) {
        delete newState.images[action.id];
      }
      return newState;
    default:
      return state;
  }
};

export default imageReducer;
