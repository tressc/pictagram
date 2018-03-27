class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    if @like.save
      render :show
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
  end

  def like_params
    params.require(:like).permit(:user_id, :img_id)
  end
end
