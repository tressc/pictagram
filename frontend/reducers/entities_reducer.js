import { combineReducers } from 'redux';
import imageReducer from './image_reducer';
import userReducer from './user_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  images: imageReducer
});

export default entitiesReducer;
