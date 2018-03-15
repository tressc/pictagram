json.images do
  @images.each do |image|
    json.set! image.id do
      json.partial! 'api/images/image', image: image
    end
  end
end

json.users do
  @images.each do |image|
    json.set! image.author.id do
      json.partial! 'api/users/user', user: image.author
    end
    image.comments.each do |comment|
      json.set! comment.user_id do
        json.partial! 'api/users/user', user: comment.user
      end
    end
  end
end

json.comments do
  @images.each do |image|
    image.comments.each do |comment|
      json.set! comment.id do
        json.partial! 'api/comments/comment', comment: comment
      end
    end
  end
end
