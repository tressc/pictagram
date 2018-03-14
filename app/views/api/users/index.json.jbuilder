@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :pro_pic, :image_ids
  end
end
