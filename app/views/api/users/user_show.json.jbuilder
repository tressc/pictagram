
  json.user do
    json.extract! @user, :id, :username, :pro_pic, :image_ids
  end

  json.images do
    @user.images.each do |image|
      json.set! image.id do
        json.img_url image.image.url
      end
    end
  end
