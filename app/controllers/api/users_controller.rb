class Api::UsersController < ApplicationController
  def show
    # @user = User.find(params[:id])
    # render json: @user
    if current_user
      render json: {user: current_user, jobs: current_user.jobs}
    else
      render json: {}, status: 404
    end
  end
  def create
    @user = User.new(params.require(:user).permit(:name, :email, :password, :password_confirmation))
    render json: @user
  end
end
