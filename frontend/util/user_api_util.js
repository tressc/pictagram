export const getUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};

export const editUser = (pro_pic, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: pro_pic
  });
};
