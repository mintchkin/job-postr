class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  include SessionsHelper

  def index
    # Rails will route all GET requests to this action
    # the actual app routing will be handled by React
  end
end
