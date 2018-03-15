class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    end
  end

  def destroy
  end

  def show
  end

  def index
  end

  def update
  end

  def comment_params
    params.require(:comment).permit(:body, :user_id, :img_id)
  end
end
