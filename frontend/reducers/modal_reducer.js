// import { merge } from 'lodash';
import { OPEN, CLOSE } from '../actions/modal_actions';

// const initialState = {
//   modal: {
//     isOpen: false,
//     component: null
//   }
// };

const ModalReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN:
      return action.modal;
    case CLOSE:
      return null;
    // case RECEIVE_COMPONENT:
    //   return merge({}, state, { component: action.component});
    default:
      return state;
  }
};

export default ModalReducer;
