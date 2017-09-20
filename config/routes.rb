Rails.application.routes.draw do
  # json api routes
  constraints lambda { |req| req.format == :json } do
    post '/login', to: "sessions#create"
    delete '/logout', to: "sessions#destroy"

    resources :users, only: [:new, :create, :show]
    resources :jobs
  end

  # html requests (routing handled by react)
  root 'application#index'
  get '*path', to: 'application#index'
end
