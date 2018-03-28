import { RECEIVE_IMAGE, RECEIVE_IMAGES, DESTROY_IMAGE } from '../actions/image_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_LIKE, DESTROY_LIKE } from '../actions/like_actions';
import { merge } from 'lodash';

const imageReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case DESTROY_LIKE:
      let newerState = merge({}, state);
      let images = Object.keys(newerState);
      images.forEach(image => {
        let like_ids = newerState[image].like_ids;
        while (like_ids.includes(action.id)) {
          like_ids.splice(like_ids.indexOf(action.id), 1);
        }
      });
      return newerState;
    case RECEIVE_LIKE:
      return merge({}, state, state[action.like.img_id].like_ids.push(action.like.id));
    case RECEIVE_COMMENT:
      return merge({}, state, state[action.comment.img_id].comment_ids.push(action.comment.id));
    case RECEIVE_IMAGES:
      return merge({}, state, action.images);
    case RECEIVE_IMAGE:
      return merge({}, state, {[action.image.id]: action.image});
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.images);
    case RECEIVE_USER:
      return merge({}, state, action.images);
    case DESTROY_IMAGE:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default imageReducer;
