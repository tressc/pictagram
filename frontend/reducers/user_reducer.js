import { RECEIVE_USER } from '../actions/user_actions';
// import { DESTROY_IMAGE } from '../actions/image_actions';
import { merge } from 'lodash';

const userReducer = (state = { users: {} }, action) => {
  Object.freeze(state);
  switch (action.type) {
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
