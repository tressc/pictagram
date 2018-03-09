export const createImage = (image) => {
  return $.ajax({
    method: 'POST',
    url: '/api/images',
    data: { image }
  });
};

export const showImage = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/images/${id}`
  });
};

export const deleteImage = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/images/${id}`
  });
};

export const fetchImages = (filter) => {
  return $.ajax({
    method: 'GET',
    url: '/api/images',
    data: filter
  });
};
