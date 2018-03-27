import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const DESTROY_LIKE = "DESTROY_LIKE";

const receiveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like
  };
};

const destroyLike = (id) => {
  return {
    type: DESTROY_LIKE,
    id
  };
};

export const createLike = (like) => (dispatch) => {
  return APIUtil.createLike(like).then(l => dispatch(receiveLike(l)));
};

export const deleteLike = (id) => (dispatch) => {
  return APIUtil.deleteLike(id).then(like => dispatch(destroyLike(id)));
};
