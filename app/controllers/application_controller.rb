class ApplicationController < ActionController::Base
  include Knock::Authenticable
  protect_from_forgery with: :null_session

  def index
    # Rails will route all GET requests to this action
    # the actual app routing will be handled by React
  end
end
