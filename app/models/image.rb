class Image < ApplicationRecord

  belongs_to :author,
  class_name: :User,
  foreign_key: :author_id

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
