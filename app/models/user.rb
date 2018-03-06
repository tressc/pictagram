class User < ApplicationRecord
  validates :username, :session_token, :email, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token

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
    BCrpyt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_token
  end
end
