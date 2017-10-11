Rails.application.routes.draw do
  # json api routes
  namespace :api do
    # endpoint for generating jwt
    post 'user_token' => 'user_token#create'

    # get 'test' => 'jobs#test_path'
    # post 'test' => 'jobs#test_path'

    resources :jobs, only: [:index, :create]
    resources :users, only: [:show, :create]
  end

  # html requests (routing handled by react)
  root 'application#index'
  get '*path', to: 'application#index'
end
