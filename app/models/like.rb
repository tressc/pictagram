class Like < ApplicationRecord
  validates :user_id, :img_id, presence: true

  belongs_to :user,
  class_name: :User,
  foreign_key: :user_id

  belongs_to :image,
  class_name: :Image,
  foreign_key: :img_id
end
