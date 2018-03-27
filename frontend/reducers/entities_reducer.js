import { combineReducers } from 'redux';
import imageReducer from './image_reducer';
import userReducer from './user_reducer';
import commentReducer from './comment_reducer';
import likeReducer from './like_reducer';

const entitiesReducer = combineReducers({
  comments: commentReducer,
  users: userReducer,
  images: imageReducer,
  likes: likeReducer
});

export default entitiesReducer;
