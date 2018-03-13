
  json.user do
    json.extract! @user, :id, :username, :pro_pic, :image_ids
  end

  json.images do
    @user.images.each do |image|
      json.set! image.id do
        json.id image.id
        json.img_url image.image.url
        json.author_id image.author_id
      end
    end
  end
