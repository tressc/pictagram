class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
  end

  def logged_in?
    !!current_user
  end


end
