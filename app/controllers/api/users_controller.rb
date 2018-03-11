class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @images = @user.images
    render :user_show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 403
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :full_name)
  end

end
