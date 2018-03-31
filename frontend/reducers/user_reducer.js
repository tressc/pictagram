import { RECEIVE_USER, UPDATE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { DESTROY_IMAGE, RECEIVE_IMAGE, RECEIVE_IMAGES } from '../actions/image_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_LIKE, DESTROY_LIKE } from '../actions/like_actions';
import { merge } from 'lodash';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKE:
      return merge({}, state, state[action.like.user_id].like_ids.push(action.like.id));
    case DESTROY_LIKE:
      let newerState = merge({}, state);
      let users1 = Object.keys(newerState);
      users1.forEach(user => {
        let like_ids = newerState[user].like_ids;
        while (like_ids.includes(action.id)) {
          like_ids.splice(like_ids.indexOf(action.id), 1);
        }
      });
      return newerState;
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case UPDATE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case DESTROY_IMAGE:
      let newState = merge({}, state);
      let users = Object.keys(newState);
      users.forEach(user => {
        let image_ids = newState[user].image_ids;
        while (image_ids.includes(action.id)) {
          image_ids.splice(image_ids.indexOf(action.id), 1);
        }
      });
      return newState;
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case RECEIVE_IMAGES:
      return merge({}, state, action.users);
    case RECEIVE_IMAGE:
      let imgUser = state[action.image.author_id];
      let newArr = imgUser.image_ids.slice();
      if (!newArr.includes(action.image.id)) {
        newArr.push(action.image.id);
      }
      return merge({}, state, {[imgUser.id]: {image_ids: newArr}});
    default:
      return state;
  }
};

export default userReducer;
