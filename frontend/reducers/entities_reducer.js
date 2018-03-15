import { combineReducers } from 'redux';
import imageReducer from './image_reducer';
import userReducer from './user_reducer';
import commentReducer from './comment_reducer';

const entitiesReducer = combineReducers({
  comments: commentReducer,
  users: userReducer,
  images: imageReducer
});

export default entitiesReducer;
