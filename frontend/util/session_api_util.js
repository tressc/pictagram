export const signUp = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    user
  });
};

export const logIn = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    user
  });
};

export const logOut = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};
