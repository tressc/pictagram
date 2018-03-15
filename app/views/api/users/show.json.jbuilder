json.user do
  json.partial! 'api/users/user', user: @user
end

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
