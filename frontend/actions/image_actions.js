import * as APIUtil from '../util/image_api_util';

export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const RECEIVE_IMAGES = "RECEIVE_IMAGES";
export const RECEIVE_IMAGE_ERRORS = "RECEIVE_IMAGE_ERRORS";
export const DESTROY_IMAGE = "DESTROY_IMAGE";

const receiveImage = ({image, comments, likes}) => {
  return {
    type: RECEIVE_IMAGE,
    image,
    comments,
    likes
  };
};

const receiveImages = ({images, users, comments, likes}) => {
  return {
    type: RECEIVE_IMAGES,
    images,
    users,
    comments,
    likes
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_IMAGE_ERRORS,
    errors
  };
};

const destroyImage = (id) => {
  return {
    type: DESTROY_IMAGE,
    id
  };
};

export const deleteImage = (id) => (dispatch) => {
  return APIUtil.deleteImage(id).then(image => dispatch(destroyImage(id)));
};

export const createImage = (image) => (dispatch) => {
  return APIUtil.createImage(image).then(image => {
    dispatch(receiveImage(image));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};

export const fetchImage = (id) => (dispatch) => {
  return APIUtil.showImage(id).then(payload => {
    dispatch(receiveImage(payload));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};

export const fetchImages = () => (dispatch) => {
  return APIUtil.fetchImages().then(payload => {
    dispatch(receiveImages(payload));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};
