class JobsController < ApplicationController
  def index
    @jobs = Job.all
  end
  def new
    @job = Job.new
  end
  def create
    @job = Job.new(params.require(:job).permit(:title, :description))
    if @job.save
      redirect_to jobs_path, flash: {success: "Job Post Created"}
    else
      render :new
    end
  end
end
