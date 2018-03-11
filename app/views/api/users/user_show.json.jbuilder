json.set! @user.id do

  json.user do
    json.extract! @user, :id, :username, :pro_pic
  end

  json.images do
    @images.each do |image|
      json.set! image.id do
        json.img_url image.image.url
      end
    end
  end

end
