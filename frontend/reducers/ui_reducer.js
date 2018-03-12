import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import imgIdReducer from './img_id_reducer';

export default combineReducers({
  modal: modalReducer,
  img_id: imgIdReducer
});
