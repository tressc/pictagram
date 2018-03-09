import { combineReducers } from 'redux';
import imageReducer from './image_reducer';

const entitiesReducer = combineReducers({
  images: imageReducer
});

export default entitiesReducer;
