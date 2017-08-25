class UsersController < ApplicationController
  before_action :login_gatekeeper, only: [:show]

  def show
    @user = User.find(params[:id])
  end
  def new
    @user = User.new
  end
  def create
    @user = User.new(params.require(:user).permit(:name, :email, :password, :password_confirmation))
    if @user.save
      login @user
      redirect_to @user, flash: {success: "Successfully created new user"}
    else
      render :new
    end
  end

  private

  def login_gatekeeper
    unless logged_in?
      redirect_to login_url, flash: {alert: "Please log in"}
    end
  end
end
