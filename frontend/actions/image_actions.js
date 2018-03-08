import * as APIUtil from '../util/image_api_util';

export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const RECEIVE_IMAGES = "RECEIVE_IMAGES";
export const REMOVE_IMAGE = "REMOVE_IMAGE";
export const RECEIVE_IMAGE_ERRORS = "RECEIVE_IMAGE_ERRORS";

const receiveImage = (image) => {
  return {
    type: RECEIVE_IMAGE,
    image
  };
};

const receiveImages = (images) => {
  return {
    type: RECEIVE_IMAGES,
    images
  };
};

const removeImage = (image) => {
  return {
    type: REMOVE_IMAGE,
    image
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_IMAGE_ERRORS,
    errors
  };
};

export const deleteImage = (id) => (dispatch) => {
  return APIUtil.deleteImage(id).then(image => dispatch(removeImage(id)));
};

export const createImage = (image) => (dispatch) => {
  return APIUtil.createImage(image).then(image => {
    dispatch(receiveImage(image));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};

export const fetchImages = (filter) => (dispatch) => {
  return APIUtil.fetchImages(filter).then(images => {
    dispatch(receiveImages(images));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};
