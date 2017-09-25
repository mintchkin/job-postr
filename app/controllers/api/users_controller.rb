class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render json: @user
  end
  def create
    @user = User.new(params.require(:user).permit(:name, :email, :password, :password_confirmation))
    render json: @user
  end
end
