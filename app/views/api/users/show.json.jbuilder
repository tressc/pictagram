json.user do
  json.partial! 'api/users/user', user: @user
end

# TODO grab all the users from all the comments from all the images from the fetched user

# json.users do
#   json.partial! 'api/users/user', user: @user
#   @user.images.each do |image|
#     image.comments.each do |comment|
#
#   end
# end

json.images do
  @user.images.each do |image|
    json.set! image.id do
      json.partial! 'api/images/image', image: image
    end
  end
end

json.comments do
  @user.images.each do |image|
    image.comments.each do |comment|
      json.set! comment.id do
        json.partial! 'api/comments/comment', comment: comment
      end
    end
  end
end
