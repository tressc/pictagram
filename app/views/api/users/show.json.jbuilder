json.user do
  json.partial! 'api/users/user', user: @user
end

json.images do
  // get that users images
end
