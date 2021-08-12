Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :lists, only: %i[index show new create] do
    resources :movies, only: %i[show] do
      resources :bookmarks, only: %i[new create destroy]
    end
  end
end
