Rails.application.routes.draw do
  resources :users, only: [:new]
  resources :jobs

  root 'jobs#index'
end
