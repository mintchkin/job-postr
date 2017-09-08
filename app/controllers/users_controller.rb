class UsersController < ApplicationController
  before_action :login_gatekeeper, only: [:show]

  def show
    @user = User.find(params[:id])
    @jobs = @user.jobs.all
  end
  def new
    @user = User.new
  end
  def create
    @user = User.new(params.require(:user).permit(:name, :email, :password, :password_confirmation))
    if @user.save
      log_in @user
      redirect_to @user, flash: {success: "Successfully created new user"}
    else
      render :new
    end
  end
end
