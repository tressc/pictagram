json.array! @users do |user|
  json.extract! user, :id, :username, :pro_pic, :image_ids
end
