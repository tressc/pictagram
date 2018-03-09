import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     if (this.props.isOpen) {
//       return (
//         <div className="modal-background" onClick={this.props.closeModal}>
//           <div className="modal-child" onClick={e => e.stopPropagation()}>
//             { this.props.component }
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div className="modal-inactive"></div>
//       );
//     }
//   }
// }

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'upload':
      component = <UploadFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal_bg" onClick={closeModal}>
      <div className="modal_child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const msp = (state) => {
  return {
    modal: state.ui.modal
  };
};

const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal);
