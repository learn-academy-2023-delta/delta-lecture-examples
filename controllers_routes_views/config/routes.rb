Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root to: 'home#landing'
  root 'home#landing'

  get '/greeter' => 'home#greeter'
  get '/joke' => 'home#joke'
  get '/answer' => 'home#answer'
  get '/delta' => 'home#current_cohort'


end
