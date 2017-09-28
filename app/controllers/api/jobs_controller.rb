class Api::JobsController < ApplicationController
  before_action :authenticate_user, only: [:create]

  def index
    @jobs = Job.all
    render json: @jobs
  end
  def create
    @job = current_user.jobs.new(params.require(:job).permit(:title, :description))
    if @job.save
      render json: @job, status: :created
    else
      render status: :bad_request
    end
  end
end
