import { merge } from 'lodash';
import { OPEN, CLOSE, RECEIVE_COMPONENT } from '../actions/modal_actions';

const ModalReducer = (state = { isOpen: false, component: null}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN:
      return merge({}, state, {isOpen: true, component: action.component});
    case CLOSE:
      return merge({}, state, {isOpen: false, component: null});
    case RECEIVE_COMPONENT:
      return merge({}, state, { component: action.component});
    default:
      return state;
  }
};

export default ModalReducer;
