@images.each do |image|
  json.set! image.id do
    json.id image.id
    json.img_url image.image.url
    json.author_id image.author_id
    json.created_at image.created_at
  end
end
