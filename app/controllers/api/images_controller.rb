class Api::ImagesController < ApplicationController

  def create
    debugger
    @image = Image.new(image_params)
    @image.author_id = current_user.id

    if @image.save
      render :show
    else
      render json: @image.errors.full_messages, status: 403
    end
  end

  def show
    @image = Image.find(params[:id])
  end

  def destroy
  end

  private

  def image_params
    params.require(:image).permit(:image)
  end
end
