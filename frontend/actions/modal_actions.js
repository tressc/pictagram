export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';
// export const RECEIVE_COMPONENT = 'RECEIVE_COMPONENT';

export const closeModal = () => {
  return {
    type: CLOSE,
    component: null
  };
};

export const openModal = (modal) => {
  return {
    type: OPEN,
    modal
  };
};

// export const receiveComponent = (component) => {
//   return {
//     type: RECEIVE_COMPONENT,
//     component
//   };
// };
