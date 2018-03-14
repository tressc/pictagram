json.user do
  json.partial! 'api/users/user', user: @user
end

json.images do
  @user.images.each do |image|
    json.partial! 'api/images/image', image: image
  end
end
