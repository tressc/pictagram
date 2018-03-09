import { OPEN, CLOSE } from '../actions/modal_actions';

const ModalReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN:
      return action.modal;
    case CLOSE:
      return null;
    default:
      return state;
  }
};

export default ModalReducer;
