class Api::ImagesController < ApplicationController

  def create
    @image = Image.new(image_params)
    @image.author_id = params[:user_id]

    if @image.save
      render :show
    else
      render json: @image.errors.full_messages, status: 403
    end
  end

  def show
  end

  def destroy
  end

  private

  def image_params
    params.require(:image).permit(:image_url)
  end
end
