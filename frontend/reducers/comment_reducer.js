import { RECEIVE_IMAGE, RECEIVE_IMAGES } from '../actions/image_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_COMMENT, DESTROY_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';

const commentReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_IMAGE:
      return merge({}, state, action.comments);
    case RECEIVE_IMAGES:
      return merge({}, state, action.comments);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.comments);
    case RECEIVE_USER:
    
      return merge({}, state, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment});
    case DESTROY_COMMENT:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default commentReducer;
