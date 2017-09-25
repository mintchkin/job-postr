class Api::JobsController < ApplicationController
  def index
    @jobs = Job.all
    render json: @jobs
  end
  def create
    @job = Job.new(params.require(:job).permit(:title, :description))
    render json: @job
  end
end
