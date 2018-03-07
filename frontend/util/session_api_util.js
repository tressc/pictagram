export const signUp = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: user
  });
};

export const logIn = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: user
  });
};

export const logOut = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};
