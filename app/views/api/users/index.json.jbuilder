@users.each do |user|
  json.set! user.id do
    # json.extract! user, :id, :username, :pro_pic, :image_ids
    json.partial! 'api/users/user', user: user
  end
end
