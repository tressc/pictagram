import {
  RECEIVE_IMAGE_ERRORS,
  RECEIVE_IMAGE,
  RECEIVE_IMAGES,
  REMOVE_IMAGE
} from '../actions/image_actions';

const imageErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_IMAGE_ERRORS:
      return action.errors;
    case RECEIVE_IMAGES:
      return [];
    case REMOVE_IMAGE:
      return [];
    case RECEIVE_IMAGE:
      return [];
    default:
      return state;
  }
};

export default imageErrorsReducer;
