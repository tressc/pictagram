import { RECEIVE_IMAGE, RECEIVE_IMAGES } from '../actions/image_actions';
import { merge } from 'lodash';

const imageReducer = (state = { images: {} }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_IMAGES:
      return merge({}, state, action.images);
    case RECEIVE_IMAGE:
      return merge({}, state, {[action.image.id]: action.image});
    default:
      return state;
  }
};

export default imageReducer;
