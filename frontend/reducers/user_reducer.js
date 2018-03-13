import { RECEIVE_USER } from '../actions/user_actions';
import { DESTROY_IMAGE, RECEIVE_IMAGE } from '../actions/image_actions';
import { merge } from 'lodash';

const userReducer = (state = { users: {} }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case DESTROY_IMAGE:
      let newState = merge({}, state);
        let idx = newState[Object.keys(newState)[0]].images.indexOf(action.id.toString());
        newState[Object.keys(newState)[0]].images.splice(idx, 1);
      return newState;
    case RECEIVE_USER:
    const imgIds = Object.keys(action.user.images);
      return merge({}, state, {[action.user.user.id]:
        {user: action.user.user,
        images: imgIds}
      });
    case RECEIVE_IMAGE:
      let imgUser = state[action.image.author_id];
      let newArr = imgUser.images.slice();
      if (!newArr.includes(action.image.id.toString())) {
        newArr.push(action.image.id.toString());
      }
      return merge({}, state, {[imgUser.user.id]: {images: newArr}});
    default:
      return state;
  }
};

export default userReducer;
