import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const login = (user) => (dispatch) => {
  return APIUtil.logIn(user).then(u => {
    dispatch(receiveCurrentUser(u));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};

export const logout = () => (dispatch) => {
  return APIUtil.logOut().then(() => dispatch(receiveCurrentUser(null)));
};

export const signup = (user) => (dispatch) => {
  return APIUtil.signUp(user).then(u => {
    dispatch(receiveCurrentUser(u));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};
