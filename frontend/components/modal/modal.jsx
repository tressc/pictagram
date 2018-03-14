import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import UploadFormContainer from '../upload/upload_form_container';
import ImgModalContainer from '../img_modal/img_modal_container';
import UploadProPicContainer from '../upload/upload_propic_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'upload':
      component = <UploadFormContainer />;
      break;
    case 'img':
      component = <ImgModalContainer />;
      break;
    case 'pro_pic':
      component = <UploadProPicContainer />;
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
