import { RECEIVE_IMG_ID } from '../actions/ui_actions';

const imgIdReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_IMG_ID:
    
      return action.id;
    default:
      return state;
  }
};

export default imgIdReducer;
