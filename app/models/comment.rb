class Comment < ApplicationRecord
  validates :body, :img_id, :user_id, presence: true

  belongs_to :user,
  className: :User,
  foreign_key: :user_id

  belongs_to :image,
  className: :Image,
  foreign_key: :img_id
end
