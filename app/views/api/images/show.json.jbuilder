json.image do
  json.partial! 'api/images/image', image: @image
end

json.comments do
  @image.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end
