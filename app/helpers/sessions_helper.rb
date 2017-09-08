module SessionsHelper
  def log_in(user)
    session[:user_id] = user.id
  end

  def log_out
    session.delete(:user_id)
    @current_user = nil
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def logged_in?
    current_user
  end

  def login_gatekeeper
    unless logged_in?
      redirect_to login_url, flash: {alert: "Please log in"}
    end
  end
end
