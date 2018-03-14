class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
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

  def update
    @user = User.find(params[:id])
    @user.pro_pic = params[:image][:image]
    if @user.save
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
