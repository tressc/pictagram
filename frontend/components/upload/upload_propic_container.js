import React from 'react';
import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { closeModal } from '../../actions/modal_actions';
import { fetchUser, editUser } from '../../actions/user_actions';

const msp = (state) => {
  return {
    formType: 'propic'
  };
};

const mdp = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    closeModal: () => dispatch(closeModal()),
    editUser: (pro_pic, id) => dispatch(editUser(pro_pic, id))
  };
};

export default connect(msp, mdp)(UploadForm);
