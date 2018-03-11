class User < ApplicationRecord
  has_attached_file :pro_pic, default_url: "https://s3.us-east-2.amazonaws.com/picta-gram-dev/images/images/000/000/001/original/blues.png"
  validates_attachment_content_type :pro_pic, content_type: /\Aimage\/.*\Z/

  validates :username, :email, uniqueness: true
  validates :email, :username, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token


  has_many :images,
  class_name: :Image,
  foreign_key: :author_id


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_token
  end
end
