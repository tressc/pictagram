json.images do
  @images.each do |image|
    json.set! image.id do
      # json.id image.id
      # json.img_url image.image.url
      # json.author_id image.author_id
      # json.created_at image.created_at
      json.partial! 'api/images/image', image: image
    end
  end
end

json.users do
  @images.each do |image|
    json.set! image.author.id do
      json.partial! 'api/users/user', user: image.author
    end
  end
end
