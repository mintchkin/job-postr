Rails.application.routes.draw do
  resources :users, only: [:new, :create, :show]
  resources :jobs

  root 'jobs#index'
end
