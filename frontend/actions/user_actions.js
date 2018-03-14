import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = "UPDATE_USER";

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user
  };
};

export const fetchUser = (id) => (dispatch) => {
  return APIUtil.getUser(id).then(user => dispatch(receiveUser(user)));
};

export const editUser = (pro_pic, id) => dispatch => {
  return APIUtil.editUser(pro_pic, id).then(user => dispatch(updateUser(user)));
};

// export const fetchUsers = 
