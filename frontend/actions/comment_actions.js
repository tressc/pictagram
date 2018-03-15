import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DESTROY_COMMENT = "DESTROY_COMMENT";

const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

const destroyComment = (id) => {
  return {
    type: DESTROY_COMMENT,
    id
  };
};

const createComment = (comment) => (dispatch) => {
  return APIUtil.createComment(comment).then(c => dispatch(receiveComment(c)));
};

export const deleteComment = (id) => (dispatch) => {
  return APIUtil.deleteComment(id).then(comment => dispatch(destroyComment(id)));
};
